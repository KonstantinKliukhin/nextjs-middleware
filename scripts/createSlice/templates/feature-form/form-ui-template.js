const firstCharUpperCase = require("../../firstCharUpperCase");
const toCamelCase = require("../../to-camel-case");

module.exports = (slice, component) => `
"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { memo, useCallback } from "react"
import { useForm } from "react-hook-form";

import {
  Form,
  GeneralFormMessage,
} from "@/shared/ui/form";
import { ${toCamelCase(slice)}Schema } from "../../model/form-schema"
import { ${component}Type } from "../../model/types"

type ${component}Props = {

}

export const ${component} = memo<${component}Props>(function ${component}(props) {
  const {} = props;

  const form = useForm<${component}Type>({
    resolver: zodResolver(${toCamelCase(slice)}Schema)
  })
  
  const onSubmit = useCallback(() => {
    
  }, [])
  
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
      
      <GeneralFormMessage/>
      </form>
    </Form>
  )
})

`;
