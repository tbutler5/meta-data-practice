export interface CustomerInvoice {
    invoiceId: string;
    amountDue: number;
    dueDate: string;
    customer: {
      name: string;
      email: string;
    };
    invoiceType: string;
}