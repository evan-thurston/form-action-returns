export const actions = {
    testaction: async ({ request }) => {
        const formData = await request.formData();
        const field1 = formData.get('field1');
        const field2 = formData.get('field2');

        console.log(field1, field2);
        return { foo: field1, bar: field2 };
    },
};
