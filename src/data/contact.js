export const CALENDLY_URL = "https://calendly.com/manuelr-aiautomation/your-automation-assistant";
export const CONTACT_EMAIL = "manuelr.aiautomation@gmail.com";

export function getInquiryEmailUrl(topic) {
  const subject = `Project inquiry: ${topic}`;
  const body = `Hi Manuel,\n\nI’d like to discuss ${topic}.\n\nBusiness name:\nCurrent website (if any):\nWhat I need help with:\nProject goals:\nPreferred timeline:\n\nThank you!`;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
