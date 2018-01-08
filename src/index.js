export default function({ types: t }) {
  return {
    visitor: {
      Program(path, file) {
        path.unshiftContainer(
          'body',
          t.expressionStatement(t.stringLiteral('use helloworld'))
        );
      }
    }
  };
}
