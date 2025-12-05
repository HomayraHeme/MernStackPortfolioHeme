# EmailJS Setup Guide (বাংলা)

কন্টাক্ট ফর্ম থেকে আপনার ইমেইলে মেসেজ পাওয়ার জন্য EmailJS সেটআপ করতে হবে।

## Step 1: EmailJS Account তৈরি করুন

1. এই লিংকে যান: https://www.emailjs.com/
2. "Sign Up Free" বাটনে ক্লিক করুন
3. আপনার Google account দিয়ে সাইন আপ করুন (অথবা email দিয়ে)

## Step 2: Email Service যোগ করুন

1. Dashboard এ যান
2. "Email Services" এ ক্লিক করুন
3. "Add New Service" বাটনে ক্লিক করুন
4. Gmail সিলেক্ট করুন (অথবা আপনার পছন্দের email provider)
5. আপনার Gmail account connect করুন
6. Service ID কপি করে রাখুন (এটা লাগবে)

## Step 3: Email Template তৈরি করুন

1. "Email Templates" এ যান
2. "Create New Template" বাটনে ক্লিক করুন
3. নিচের template টি copy করে paste করুন:

**Subject:**
```
New Message from {{from_name}} - {{subject}}
```

**Content:**
```
You have received a new message from your portfolio website!

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Template save করুন
5. Template ID কপি করে রাখুন

## Step 4: Public Key নিন

1. "Account" সেকশনে যান
2. "API Keys" ট্যাবে ক্লিক করুন
3. "Public Key" কপি করুন

## Step 5: আপনার কোডে Values আপডেট করুন

`src/App.jsx` ফাইলে গিয়ে `handleSubmit` ফাংশনের মধ্যে নিচের লাইনগুলো খুঁজে বের করুন এবং আপডেট করুন:

```javascript
const result = await emailjs.send(
  'YOUR_SERVICE_ID',      // ← এখানে আপনার Service ID দিন
  'YOUR_TEMPLATE_ID',     // ← এখানে আপনার Template ID দিন
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'your-email@example.com' // ← এখানে আপনার email দিন যেখানে মেসেজ পাবেন
  },
  'YOUR_PUBLIC_KEY'       // ← এখানে আপনার Public Key দিন
);
```

### উদাহরণ:

```javascript
const result = await emailjs.send(
  'service_abc123',
  'template_xyz789',
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'homayra@example.com'
  },
  'aBcD1234eFgH5678'
);
```

## Step 6: Test করুন

1. আপনার portfolio ওয়েবসাইটে যান
2. Contact সেকশনে scroll করুন
3. ফর্ম fill করুন এবং "Send Message" এ ক্লিক করুন
4. কিছুক্ষণ পরে আপনার ইমেইল চেক করুন - মেসেজ পাওয়া উচিত!

## Troubleshooting (সমস্যা হলে)

### যদি ইমেইল না আসে:
- EmailJS dashboard এ যান এবং "Logs" চেক করুন
- Browser console খুলে error message দেখুন (F12 চাপুন)
- সব ID এবং Key সঠিকভাবে কপি করেছেন কিনা চেক করুন

### Free Tier Limits:
- EmailJS এর free plan এ প্রতি মাসে 200টি email পাঠাতে পারবেন
- এটি একটি portfolio website এর জন্য যথেষ্ট

## Optional: EmailJS Settings

### Auto-Reply Setup:
আপনি চাইলে যারা মেসেজ পাঠাবে তাদের একটি automatic reply email পাঠাতে পারেন। এর জন্য:
1. নতুন একটি template তৈরি করুন
2. Template এর "To Email" field এ `{{from_email}}` দিন
3. একটি nice thank you message লিখুন

---

**সাহায্যের প্রয়োজন হলে:**
- EmailJS Documentation: https://www.emailjs.com/docs/
- YouTube এ "EmailJS tutorial" সার্চ করুন
