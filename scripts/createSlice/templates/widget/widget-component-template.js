const firstCharUpperCase = require("../../firstCharUpperCase");
const toCamelCase = require("../../to-camel-case");

module.exports = (slice) => `
import { memo } from "react"

type ${firstCharUpperCase(toCamelCase(slice))}Props = {

}

export const ${firstCharUpperCase(toCamelCase(slice))} = memo<${firstCharUpperCase(toCamelCase(slice))}Props>(function ${firstCharUpperCase(toCamelCase(slice))}(props) {
  const {} = props;

  return (
    <div>
      
    </div>
  )
})
`;
