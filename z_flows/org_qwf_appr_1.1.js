this = {
    "name": "Approver",
    "version": "1.1",
    "stages": [
        {
            "name": "stage1",
            "function": function (CONTEXT) {
                //CONTEXT.next_stage = ["branch", "Sampath_ORG_CUST_B3_Quick_customer_onboarding_summary:2.0", "start"];
            },
        },
        {
            "name": "stage2",
            "function": function (CONTEXT) {
               //This is this. 9.45 change
               let x = 12 + 5
               let y = x *100;
            },
        }
    ]
}