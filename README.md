
# **Metadata Practice Tasks**

This project is designed to help you practice reading, analyzing, and debugging complex metadata structures in a **Next.js** application. Each task focuses on understanding metadata, implementing error handling, and displaying results with minimal UI. The project is organized into multiple pages, with each page addressing a specific set of tasks.

---

## **Project Setup**

1. Clone this repository.
2. Place the provided JSON files in the `/public/data` folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## **Tasks Overview**

Each task is linked to a specific page, with JSON files explicitly mapped for clarity.

---

### **1. Billing Plans Page**

**Page URL:** `/tasks/billing-plans`  
**JSON File(s):** `/public/data/billing-plans-data.json`  
**Purpose:** Analyze and display details about billing plans.

#### **Tasks**
1. **Display Active Billing Plans**
   - Show all active plans in a table.
   - Columns: **Plan Name**, **Price Per Month**, **Max Users**, **Features**.

2. **Highlight Discounted Plans**
   - Add a discount badge for plans with active discounts.
   - Include details like discount percentage and expiration date.

3. **Handle Empty Plans**
   - If no active plans are available:
     - Display a legal disclaimer: *"No active plans available. Please contact support for more details."*

4. **Show Enterprise Overages**
   - Create a section listing overages for **Enterprise Plans**.
   - Include details like **per-user charges** and **maximum overage limits**.

5. **Legal Notices**
   - Display the `legalInfo.notice` (from the JSON) as a static footer at the bottom of the page.

---

### **2. Customer Invoices Page**

**Page URL:** `/tasks/customer-invoices`  
**JSON File(s):** `/public/data/customer-invoice-data.json` and `/public/data/customers-invoices.json`  
**Purpose:** Display and analyze customer invoices, including overdue statuses.

#### **Tasks**
1. **List Customer Invoices**
   - Display all invoices in a table.
   - Columns: **Invoice Number**, **Customer Name**, **Amount Due**, **Due Date**, **Invoice Type**.

2. **Handle Missing Invoices**
   - If no invoices exist:
     - Show a disclaimer card: *"No invoices available for this customer."*

3. **Highlight Overdue Invoices**
   - Add a column to mark invoices as overdue if the current date is past the `due_date`.

4. **Add Invoice Links**
   - Provide clickable links for `hosted_invoice_url`.
   - If the link is missing, display: *"Invoice link unavailable."*

5. **Unpaid Invoice Alert**
   - Show an alert or modal for invoices with an amount due above **$5000**:
     - *"Please email [customer email] to address unpaid invoices."*

---

### **3. Usage Data Page**

**Page URL:** `/tasks/usage-data`  
**JSON File(s):** `/public/data/usage-data.json`  
**Purpose:** Analyze and display usage metrics over time.

#### **Tasks**
1. **Visualize Usage Over Time**
   - Render a line chart of `usage` over time.
   - Handle missing/invalid data by marking it as *"Unavailable"*.

2. **Summarize Total Usage**
   - Display the total usage for the period.
   - Include a disclaimer: *"Some usage data is missing, totals may be inaccurate."*

3. **High Usage Alert**
   - Highlight hours where usage exceeds **2000**.
   - List these hours below the chart.

4. **Handle No Data**
   - If no valid usage data exists:
     - Show a modal: *"No usage data available. Please try again later."*

5. **Display Last Updated**
   - Show the `last_updated` timestamp as a formatted footer.

---

## **General Notes**

- **Focus Areas:**
  - Read and understand the JSON structure.
  - Implement error handling and fallback logic.
  - Build minimal, functional UI for tasks.
- **Technologies:**
  - **TypeScript:** Use types/interfaces for data validation.
  - **React/Next.js:** For rendering components and handling routes.

---

## **Getting Started**

1. Fetch the JSON files using `fetch('/data/filename.json')`.
2. Parse and display the data in each task page.
3. Use error boundaries and fallback logic for robust handling.

Happy coding!
