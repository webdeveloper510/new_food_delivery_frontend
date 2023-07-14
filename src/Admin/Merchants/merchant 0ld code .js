onSubmit: async (values, { resetForm }) => {
    // dispatch(registerUser(values));
    const formData = new FormData();
    formData.append('image', values.image);

    try {
        const response = await axios.post(
            API.BASE_URL + 'admin/merchant',
            {
                image: formData,
                firstName: values.firstName,
                lastName: values.LastName,
                email: values.email,
                password: values.password,
                phoneNumber: values.phoneNumber,
                countryCode: values.countyCode,
            },
            {
                headers: {
                    'x-access-token': loginToken,
                },
            }
        );

        if (response.data.status === 200) {
            notify(); // Call the notify function here
            console.log(notify, "==========>notify");
            navigate('/admin/merchant');
            console.log("success");
        } else if (response.data.status === 400) {
            toast.error(response.data.error);
            console.log("Error");
        }
    } catch (error) {
        console.log(error, '============>Error');
        if (error.response && error.response.data && error.response.data.status === 400) {
            toast.error(error.response.data.code);
        } else {
            toast.error("An error occurred/server. Please try again later.");
        }
    }
}