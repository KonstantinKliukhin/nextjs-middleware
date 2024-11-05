"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

// for initializing forms that needs to wait for initial data
// very handy in conjunction with tanstack query
export const useCustomForm = ((...args) => {
  const defaultValues = args?.[0]?.defaultValues;
  const form = useForm(...args);
  const { reset } = form;

  useEffect(() => {
    if (typeof defaultValues === "object") {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  return form;
}) as typeof useForm;
