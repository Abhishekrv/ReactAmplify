/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Project } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
}) {
  const labelElement = <Text>{label}</Text>;
  const { tokens } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            color={tokens.colors.brand.primary[80]}
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function ProjectCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    ProjectName: "",
    ProjectAdmins: [],
    ProjectMembers: "",
    Scoping: "",
    Reporting: "",
    Remediation: "",
  };
  const [ProjectName, setProjectName] = React.useState(
    initialValues.ProjectName
  );
  const [ProjectAdmins, setProjectAdmins] = React.useState(
    initialValues.ProjectAdmins
  );
  const [ProjectMembers, setProjectMembers] = React.useState(
    initialValues.ProjectMembers
  );
  const [Scoping, setScoping] = React.useState(initialValues.Scoping);
  const [Reporting, setReporting] = React.useState(initialValues.Reporting);
  const [Remediation, setRemediation] = React.useState(
    initialValues.Remediation
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setProjectName(initialValues.ProjectName);
    setProjectAdmins(initialValues.ProjectAdmins);
    setCurrentProjectAdminsValue("");
    setProjectMembers(initialValues.ProjectMembers);
    setScoping(initialValues.Scoping);
    setReporting(initialValues.Reporting);
    setRemediation(initialValues.Remediation);
    setErrors({});
  };
  const [currentProjectAdminsValue, setCurrentProjectAdminsValue] =
    React.useState("");
  const ProjectAdminsRef = React.createRef();
  const validations = {
    ProjectName: [],
    ProjectAdmins: [],
    ProjectMembers: [],
    Scoping: [],
    Reporting: [],
    Remediation: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          ProjectName,
          ProjectAdmins,
          ProjectMembers,
          Scoping,
          Reporting,
          Remediation,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Project(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProjectCreateForm")}
      {...rest}
    >
      <TextField
        label="Project name"
        isRequired={false}
        isReadOnly={false}
        value={ProjectName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName: value,
              ProjectAdmins,
              ProjectMembers,
              Scoping,
              Reporting,
              Remediation,
            };
            const result = onChange(modelFields);
            value = result?.ProjectName ?? value;
          }
          if (errors.ProjectName?.hasError) {
            runValidationTasks("ProjectName", value);
          }
          setProjectName(value);
        }}
        onBlur={() => runValidationTasks("ProjectName", ProjectName)}
        errorMessage={errors.ProjectName?.errorMessage}
        hasError={errors.ProjectName?.hasError}
        {...getOverrideProps(overrides, "ProjectName")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              ProjectName,
              ProjectAdmins: values,
              ProjectMembers,
              Scoping,
              Reporting,
              Remediation,
            };
            const result = onChange(modelFields);
            values = result?.ProjectAdmins ?? values;
          }
          setProjectAdmins(values);
          setCurrentProjectAdminsValue("");
        }}
        currentFieldValue={currentProjectAdminsValue}
        label={"Project admins"}
        items={ProjectAdmins}
        hasError={errors.ProjectAdmins?.hasError}
        setFieldValue={setCurrentProjectAdminsValue}
        inputFieldRef={ProjectAdminsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Project admins"
          isRequired={false}
          isReadOnly={false}
          value={currentProjectAdminsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.ProjectAdmins?.hasError) {
              runValidationTasks("ProjectAdmins", value);
            }
            setCurrentProjectAdminsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("ProjectAdmins", currentProjectAdminsValue)
          }
          errorMessage={errors.ProjectAdmins?.errorMessage}
          hasError={errors.ProjectAdmins?.hasError}
          ref={ProjectAdminsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "ProjectAdmins")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Project members"
        isRequired={false}
        isReadOnly={false}
        value={ProjectMembers}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              ProjectAdmins,
              ProjectMembers: value,
              Scoping,
              Reporting,
              Remediation,
            };
            const result = onChange(modelFields);
            value = result?.ProjectMembers ?? value;
          }
          if (errors.ProjectMembers?.hasError) {
            runValidationTasks("ProjectMembers", value);
          }
          setProjectMembers(value);
        }}
        onBlur={() => runValidationTasks("ProjectMembers", ProjectMembers)}
        errorMessage={errors.ProjectMembers?.errorMessage}
        hasError={errors.ProjectMembers?.hasError}
        {...getOverrideProps(overrides, "ProjectMembers")}
      ></TextField>
      <TextField
        label="Scoping"
        isRequired={false}
        isReadOnly={false}
        value={Scoping}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              ProjectAdmins,
              ProjectMembers,
              Scoping: value,
              Reporting,
              Remediation,
            };
            const result = onChange(modelFields);
            value = result?.Scoping ?? value;
          }
          if (errors.Scoping?.hasError) {
            runValidationTasks("Scoping", value);
          }
          setScoping(value);
        }}
        onBlur={() => runValidationTasks("Scoping", Scoping)}
        errorMessage={errors.Scoping?.errorMessage}
        hasError={errors.Scoping?.hasError}
        {...getOverrideProps(overrides, "Scoping")}
      ></TextField>
      <TextField
        label="Reporting"
        isRequired={false}
        isReadOnly={false}
        value={Reporting}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              ProjectAdmins,
              ProjectMembers,
              Scoping,
              Reporting: value,
              Remediation,
            };
            const result = onChange(modelFields);
            value = result?.Reporting ?? value;
          }
          if (errors.Reporting?.hasError) {
            runValidationTasks("Reporting", value);
          }
          setReporting(value);
        }}
        onBlur={() => runValidationTasks("Reporting", Reporting)}
        errorMessage={errors.Reporting?.errorMessage}
        hasError={errors.Reporting?.hasError}
        {...getOverrideProps(overrides, "Reporting")}
      ></TextField>
      <TextField
        label="Remediation"
        isRequired={false}
        isReadOnly={false}
        value={Remediation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              ProjectAdmins,
              ProjectMembers,
              Scoping,
              Reporting,
              Remediation: value,
            };
            const result = onChange(modelFields);
            value = result?.Remediation ?? value;
          }
          if (errors.Remediation?.hasError) {
            runValidationTasks("Remediation", value);
          }
          setRemediation(value);
        }}
        onBlur={() => runValidationTasks("Remediation", Remediation)}
        errorMessage={errors.Remediation?.errorMessage}
        hasError={errors.Remediation?.hasError}
        {...getOverrideProps(overrides, "Remediation")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
