function DraftList({ drafts, deleteDraft, editDraft }) {
  return (
    <div>
      <h2>Saved Drafts</h2>

      {drafts.length === 0 ? (
        <p>No drafts available.</p>
      ) : (
        drafts.map((draft, index) => (
          <div
            key={index}
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <h4>{draft.platform}</h4>

            <p>{draft.content}</p>

            <button onClick={() => editDraft(index)}>
              Edit
            </button>

            <button
              style={{ marginLeft: "10px" }}
              onClick={() => deleteDraft(index)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default DraftList;