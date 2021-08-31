import { useForm, FormProvider } from "react-hook-form";

interface FormProvider {
  defaultValues?: any;
  children?: any;
  onSubmit?: any;
}

export const FProvider = ({
  defaultValues,
  children,
  onSubmit,
}: FormProvider) => {
  const methods = useForm({ defaultValues: defaultValues });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
