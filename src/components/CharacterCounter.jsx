function CharacterCounter({ current, limit }) {
  return (
    <div
      style={{
        marginTop: "10px",
        fontWeight: "bold",
        textAlign: "right",
      }}
    >
      {current} / {limit}
    </div>
  );
}

export default CharacterCounter;