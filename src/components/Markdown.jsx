import ReactMarkdown from "react-markdown";

function Markdown({ blok }) {
  return (
    <div className="markdown">
      <ReactMarkdown
        components={{
          h1({ node, ...rest }) {
            return <h1 className="h1" {...rest} />;
          },
          h2({ node, ...rest }) {
            return <h2 className="h2" {...rest} />;
          },
          h3({ node, ...rest }) {
            return <h3 className="h3" {...rest} />;
          },
          h4({ node, ...rest }) {
            return <h4 className="h4" {...rest} />;
          },
          h5({ node, ...rest }) {
            return <h5 className="h5" {...rest} />;
          },
          p({ node, ...rest }) {
            // Use br element for line breaks
            if (
              node.children?.length === 1 &&
              node.children?.[0].value.length === 1
            ) {
              return <br />;
            }
            return <p className="body-default" {...rest} />;
          },
        }}
      >
        {blok.content}
      </ReactMarkdown>
    </div>
  );
}

export default Markdown;
