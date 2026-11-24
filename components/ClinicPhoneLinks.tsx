import { consultation, reception } from "@/lib/clinicPhones";

export default function ClinicPhoneLinks() {
  return (
    <div className="space-y-1">
      {[consultation, reception].map(({ label, number, href }) => (
        <a key={href} href={href} className="block text-[#6B7280] hover:underline">
          {label}: <bdi dir="ltr">{number}</bdi>
        </a>
      ))}
    </div>
  );
}
