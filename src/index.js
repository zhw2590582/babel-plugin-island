export default function({ types: t }) {
  return {
    visitor: {
      Program(path, state) {
        const options = Object.assign({}, {
          author: 'null',
          email: 'null',
          homepage: 'null'
        }, state.opts);

        path.addComment('leading', `\n @Author: ${options.author} \n\n @Email: ${options.email} \n\n @Homepage: ${options.homepage} \n\n @Date: ${new Date()} \n\n`);
      }
    }
  };
}
