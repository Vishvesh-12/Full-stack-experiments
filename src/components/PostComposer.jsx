import { useState } from "react";
import CharacterCounter from "./CharacterCounter";
import DraftList from "./DraftList";
import strategies from "../strategies/validationStrategy";
import useDraft from "../hooks/useDraft";

function PostComposer() {

  const { drafts, setDrafts } = useDraft();

  const [platform, setPlatform] = useState("twitter");
  const [content, setContent] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const limit = strategies[platform].limit;

  const isValid = strategies[platform].validate(content);

  const saveDraft = () => {

    if (!content.trim()) return;

    const draft = {
      platform,
      content,
    };

    if (editingIndex !== null) {

      const updated = [...drafts];

      updated[editingIndex] = draft;

      setDrafts(updated);

      setEditingIndex(null);

    } else {

      setDrafts([...drafts, draft]);

    }

    setContent("");

    setPlatform("twitter");
  };

  const deleteDraft = (index) => {

    const updated = drafts.filter((_, i) => i !== index);

    setDrafts(updated);

  };

  const editDraft = (index) => {

    setPlatform(drafts[index].platform);

    setContent(drafts[index].content);

    setEditingIndex(index);

  };

  return (

    <div>

      <label><b>Select Platform</b></label>

      <br />

      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
      >
        <option value="twitter">Twitter</option>
        <option value="linkedin">LinkedIn</option>
        <option value="instagram">Instagram</option>
      </select>

      <br /><br />

      <textarea
        rows="8"
        cols="60"
        value={content}
        placeholder="Write your post..."
        onChange={(e) => setContent(e.target.value)}
      />

      <CharacterCounter
        current={content.length}
        limit={limit}
      />

      {!isValid && (

        <p style={{ color: "red" }}>

          Character limit exceeded!

        </p>

      )}

      <br />

      <button
        disabled={!isValid}
        onClick={saveDraft}
      >
        {editingIndex !== null ? "Update Draft" : "Save Draft"}
      </button>

      <hr />

      <DraftList
        drafts={drafts}
        deleteDraft={deleteDraft}
        editDraft={editDraft}
      />

    </div>

  );

}

export default PostComposer;