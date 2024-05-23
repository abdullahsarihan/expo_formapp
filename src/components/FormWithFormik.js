//src/components/FormWithFormik
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validations";
import {
  Box,
  FormControl,
  Input,
  WarningOutlineIcon,
  Button,
} from "native-base";

const FormWithFormik = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 1000));

      if (values.email === "test@test.com") {
        // return bag.setErrors({ email: "Bu mail adresi zaten kullanılıyor." });
        return bag.setFieldError("email", "Bu mail adresi zaten kullanılıyor.");
      }

      bag.resetForm();

      console.log(values);
      console.log(bag);
    },
    validationSchema,
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nativebase UI Kit</Text>

      <Box alignItems="center" mb={2}>
        <FormControl isInvalid={errors.username && touched.username} w="100%">
          {/* <FormControl.Label>Username</FormControl.Label> */}
          <Input
            placeholder="Username"
            value={values.username}
            onChangeText={handleChange("username")}
            onBlur={handleBlur("username")}
            editable={!isSubmitting}
            height={50}
            fontSize={20}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errors.username}
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>

      <Box alignItems="center" mb={2}>
        <FormControl isInvalid={errors.email && touched.email} w="100%">
          {/* <FormControl.Label>E-mail</FormControl.Label> */}
          <Input
            placeholder="E-mail"
            value={values.email}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            editable={!isSubmitting}
            autoCapitalize="none"
            keyboardType="email-address"
            height={50}
            fontSize={20}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errors.email}
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>

      <Box alignItems="center" mb={2}>
        <FormControl isInvalid={errors.password && touched.password} w="100%">
          {/* <FormControl.Label>Password</FormControl.Label> */}
          <Input
            placeholder="Password"
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            editable={!isSubmitting}
            secureTextEntry
            height={50}
            fontSize={20}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errors.password}
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>

      <Box alignItems="center" mb={2}>
        <FormControl
          isInvalid={errors.passwordConfirm && touched.passwordConfirm}
          w="100%"
        >
          {/* <FormControl.Label>Password Confirm</FormControl.Label> */}
          <Input
            placeholder="Password Confirm"
            value={values.passwordConfirm}
            onChangeText={handleChange("passwordConfirm")}
            onBlur={handleBlur("passwordConfirm")}
            editable={!isSubmitting}
            secureTextEntry
            height={50}
            fontSize={20}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errors.passwordConfirm}
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>

      <Button
        size={"lg"}
        style={styles.items}
        onPress={handleSubmit}
        isLoading={isSubmitting}
        isLoadingText="Submitting"
        disabled={isSubmitting}
      >
        REGISTER
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
  },
  item: {
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 10,
    fontSize: 24,
    width: "100%",
  },
  text: {
    color: "#8e43e7",
    marginBottom: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  error: {
    color: "red",
  },
  items: {
    marginTop: 20,
  },
});

export default FormWithFormik;
