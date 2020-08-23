import React, { Fragment, useState } from "react";
import { Form, Field } from "react-final-form";
import { createUseStyles } from "react-jss";
import { connect } from "react-redux";
import Error from "./Error";
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
          const withErrorsClassesButtons = classNames({
            [loadClasses.buttons]: true
          });

          return (
            <form onSubmit={handleSubmit}>
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
                    <div className={loadClasses.rowForm}>
                      <label
                        className={`${loadClasses.label} ${loadClasses.rowLabel}`}
                      >
                        Please enter url to retrieve csv data
                      </label>
                      <input
                        {...input}
                        type="text"
                        placeholder="URL"
                        className={`${loadClasses.input} ${loadClasses.rowInput}`}
                      />
                      <Error meta={meta} />
                    </div>
                  );
                }}
              </Field>
              <Field name="epochs" validate={validators.required}>
                {({ input, meta }) => {
                  return (
                    <div className={loadClasses.rowForm}>
                      <label
                        className={`${loadClasses.label} ${loadClasses.rowLabel}`}
                      >
                        Epochs
                      </label>
                      <input
                        {...input}
                        type="text"
                        placeholder="Epochs"
                        className={`${loadClasses.input} ${loadClasses.rowInput}`}
                      />
                      <Error meta={meta} />
                    </div>
                  );
                }}
              </Field>
              <Field name="csvProperty" validate={validators.required}>
                {({ input, meta }) => {
                  return (
                    <div className={loadClasses.rowForm}>
                      <label
                        className={`${loadClasses.label} ${loadClasses.rowLabel}`}
                      >
                        Property
                      </label>
                      <input
                        {...input}
                        type="text"
                        placeholder="csvProperty"
                        className={`${loadClasses.input} ${loadClasses.rowInput}`}
                      />
                      <Error meta={meta} />
                    </div>
                  );
                }}
              </Field>
              <Field name="windowSize" validate={validators.required}>
                {({ input, meta }) => {
                  return (
                    <div className={loadClasses.rowForm}>
                      <label
                        className={`${loadClasses.label} ${loadClasses.rowLabel}`}
                      >
                        Window Size
                      </label>
                      <input
                        {...input}
                        type="text"
                        placeholder="windowSize"
                        className={`${loadClasses.input} ${loadClasses.rowInput}`}
                      />
                      <Error meta={meta} />
                    </div>
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
