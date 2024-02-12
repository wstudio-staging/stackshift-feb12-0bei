import { Card } from "components/ui/Card";
import { ConditionalLink } from "components/ui/ConditionalLink";
import { Form } from "components/ui/Form/Form";
import { FormField } from "components/ui/FormField";
import { thankYouPageLink } from "helper";
import { LabeledRoute, Form as TForm } from "types";

export type SignUpFormProps = {
  form: TForm;
  signInLink?: LabeledRoute;
  className?: string;
};

export function SignUpForm({ form, signInLink, className }: SignUpFormProps) {
  return (
    <Card className={`px-6 py-8 mb-6 text-center ${className}`}>
      <Form
        id={form?.id}
        name="Calltoaction-VariantD-Form"
        className="form-callToAction"
        thankyouPage-={thankYouPageLink(form?.thankYouPage)}
      >
        <div className="mb-6">
          <span className="text-sm text-gray-500">{form?.subtitle}</span>
          <p className="text-2xl">{form?.name}</p>
        </div>
        <div className="flex flex-wrap mb-3 -mx-2">
          {form?.fields?.slice(0, 2)?.map((formFields, index) => (
            <div
              className="w-full px-2 mb-3 lg:mb-0 lg:w-1/2 xl:mb-0 2xl:mb-0"
              key={index}
            >
              <FormField
                noLabel
                variant={"secondary"}
                name={formFields?.name}
                placeholder={formFields?.placeholder}
                required={formFields?.isRequired}
                {...formFields}
              />
            </div>
          ))}
        </div>
        <div className="mb-3 space-y-3">
          {form?.fields?.slice(2)?.map((formFields, index) => (
            <div key={index}>
              <FormField
                noLabel
                name={formFields?.name}
                variant={"secondary"}
                {...formFields}
              />
            </div>
          ))}
        </div>
        <div>
          <div className="webriq-recaptcha" />
        </div>
        {form?.buttonLabel && (
          <button
            aria-label={
              form?.buttonLabel ?? "Call to action form submit button"
            }
            className="w-full py-4 mb-4 text-sm font-bold leading-normal text-white transition duration-200 rounded bg-brand-primary-foreground hover:bg-brand-primary"
            type="submit"
          >
            {form?.buttonLabel}
          </button>
        )}
      </Form>
      {signInLink?.label && (
        <p className="text-xs text-gray-500">
          <span>Already have an account?</span>
          <ConditionalLink
            variant="link"
            link={signInLink}
            className="text-brand-primary hover:text-brand-secondary"
            ariaLabel={signInLink?.label}
          >
            {signInLink?.label}
          </ConditionalLink>
        </p>
      )}
    </Card>
  );
}
