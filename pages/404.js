export default function Custom404() {
  return (
    <div className="error-div">
      <h1
        className="next-error-h1"
        // style="display:inline-block;margin:0 20px 0 0;padding-right:23px;font-size:24px;font-weight:500;vertical-align:top;line-height:49px"
      >
        404
      </h1>
      <div style={{ display: "inline-block", textAlign: "left" }}>
        <h2
          style={{ fontSize: 14, fontWeight: 400, lineHeight: 49, margin: 0 }}
        >
          This page could not be found. Redirecting to{" "}
        </h2>
      </div>
    </div>
  );
}
