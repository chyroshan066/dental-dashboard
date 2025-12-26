import { BillingInfoCard } from "./cards/BillingInfoCard";
import { CreditCard } from "./cards/CreditCard";
import { InvoiceCard } from "./cards/InvoiceCard";
import { PaymentMethodCard } from "./cards/PaymentMethodCard";
import { StatMiniCard } from "./cards/StatMiniCard";
import { TransactionCard } from "./cards/TransactionCard";

export const Billing = () => (
  <>
    <div className="flex flex-wrap -mx-3">
      <div className="max-w-full px-3 lg:w-2/3 lg:flex-none">
        <div className="flex flex-wrap -mx-3">
          <CreditCard />
          <StatMiniCard />
          <PaymentMethodCard />
        </div>
      </div>
      <InvoiceCard />
    </div>
    <div className="flex flex-wrap -mx-3">
      <BillingInfoCard />
      <TransactionCard />
    </div>
  </>
);
