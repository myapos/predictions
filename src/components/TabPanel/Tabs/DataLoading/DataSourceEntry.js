import React, { Fragment, useState } from "react";
import { Form, Field } from "react-final-form";
import { createUseStyles } from "react-jss";
import { connect } from "react-redux";
import { FORM_ERROR } from "final-form";
import validators from "../../../../utils/validators";

import * as actions from "../../../../store";

import classNames from "classnames";
import { stylesForm } from "./stylesForm";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const useStyles = createUseStyles({ ...stylesForm });
const onSubmit = async (values, action) => {
  // await sleep(300);
  // window.alert(JSON.stringify(values, 0, 2));

  action(values);
};

const DataSourceEntry = (props) => {
  // const [hasError, setHasError] = useState(false);
  const { getURl } = props;
  const loadClasses = useStyles();

  const classesSubmit = classNames({
    [loadClasses.button]: true,
    [loadClasses.submitButton]: true
  });

  const classesReset = classNames({
    [loadClasses.button]: true,
    [loadClasses.resetButton]: true
  });

  // ({ input, meta })
  const formSubscription = {
    submitting: true,
    values: true,
    pristine: false,
    submitError: true
  };

  // const formClasses = classNames({
  //   [loadClasses.form]: true
  // });

  // const classesButtons = classNames({
  //   [loadClasses.buttons]: true
  // });
  // subscription={formSubscription}

  // Monthly beer production
  return (
    <div>
      <Form
        onSubmit={(values) => onSubmit(values, getURl)}
        render={({
          handleSubmit,
          form,
          submitting,
          pristine,
          values,
          submitError,
          ...rest
        }) => {
          // console.log(
          //   "form",
          //   form.getFieldState("epochs"),
          //   " submitError",
          //   submitError,
          //   rest
          // );

          const epochsField = form.getFieldState("epochs");
          const hasEpochsError =
            epochsField && typeof epochsField.error !== "undefined";

          const csvPropertyField = form.getFieldState("csvProperty");
          const hasCsvPropertyError =
            csvPropertyField && typeof csvPropertyField.error !== "undefined";

          const urlField = form.getFieldState("url");
          const hasUrlError = urlField && typeof urlField.error !== "undefined";

          const hasError = hasEpochsError || hasCsvPropertyError || hasUrlError;

          const withErrorsFormClasses = classNames({
            [loadClasses.form]: true,
            [loadClasses.formError]: hasError
          });

          const withErrorsClassesButtons = classNames({
            [loadClasses.buttons]: true,
            [loadClasses.buttonsErrors]: hasError
          });

          return (
            <form onSubmit={handleSubmit} className={withErrorsFormClasses}>
              <Field
                name="url"
                validate={validators.composeValidators(
                  validators.required,
                  validators.isUrl
                )}
              >
                {(inp) => {
                  const { input, meta } = inp;
                  // console.log("inp", inp);

                  return (
                    <Fragment>
                      <label className={loadClasses.label}>
                        Please enter url to retrieve csv data
                      </label>
                      <input
                        {...input}
                        type="text"
                        placeholder="URL"
                        className={loadClasses.input}
                      />
                      {meta.error && meta.touched && (
                        <span className={loadClasses.error}>{meta.error}</span>
                      )}
                    </Fragment>
                  );
                }}
              </Field>
              <Field name="epochs" validate={validators.required}>
                {({ input, meta }) => {
                  return (
                    <Fragment>
                      <label className={loadClasses.label}>Epochs</label>
                      <input
                        {...input}
                        type="text"
                        placeholder="Epochs"
                        className={loadClasses.input}
                      />
                      {meta.error && meta.touched && (
                        <span className={loadClasses.error}>{meta.error}</span>
                      )}
                    </Fragment>
                  );
                }}
              </Field>
              <Field name="csvProperty" validate={validators.required}>
                {({ input, meta }) => {
                  return (
                    <Fragment>
                      <label className={loadClasses.label}>Property</label>
                      <input
                        {...input}
                        type="text"
                        placeholder="csvProperty"
                        className={loadClasses.input}
                      />
                      {meta.error && meta.touched && (
                        <span className={loadClasses.error}>{meta.error}</span>
                      )}
                    </Fragment>
                  );
                }}
              </Field>
              <Field name="windowSize" validate={validators.required}>
                {({ input, meta }) => {
                  return (
                    <Fragment>
                      <label className={loadClasses.label}>Window Size</label>
                      <input
                        {...input}
                        type="text"
                        placeholder="windowSize"
                        className={loadClasses.input}
                      />
                      {meta.error && meta.touched && (
                        <span className={loadClasses.error}>{meta.error}</span>
                      )}
                    </Fragment>
                  );
                }}
              </Field>
              <div className={withErrorsClassesButtons}>
                <button
                  type="submit"
                  disabled={submitting}
                  className={classesSubmit}
                >
                  Submit
                </button>
                {/* <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                  className={classesReset}
                >
                  Reset
                </button> */}
              </div>
            </form>
          );
        }}
      />
    </div>
  );
};

export default connect((state) => state, actions)(DataSourceEntry);
