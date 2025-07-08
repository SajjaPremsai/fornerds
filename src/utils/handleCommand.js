import commands from "../data/commands.json";

function handleCommand(input) {
  if (!commands[input]) {
    return {
      command: input,
      result: `bash: ${input}: command not found...`
    };
  } else {
    return {
      command: input,
      result: commands[input]
    };
  }
}

export default handleCommand;
