import React from "react";
import { Form, Field } from "react-final-form";
import { createUseStyles } from "react-jss";

import classNames from "classnames";
import { stylesForm } from "./stylesForm";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const useStyles = createUseStyles({ ...stylesForm });
const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const DataSourceEntry = () => {
  const loadClasses = useStyles();

  const classesSubmit = classNames({
    [loadClasses.button]: true,
    [loadClasses.submitButton]: true
  });

  const classesReset = classNames({
    [loadClasses.button]: true,
    [loadClasses.resetButton]: true
  });

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "Required";
          }

          return errors;
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="username">
              {({ input, meta }) => (
                <div>
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
                </div>
              )}
            </Field>

            <div className={loadClasses.buttons}>
              <button
                type="submit"
                disabled={submitting}
                className={classesSubmit}
              >
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
                className={classesReset}
              >
                Reset
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default DataSourceEntry;
