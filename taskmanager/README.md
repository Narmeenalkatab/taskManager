## Getting Started

First, run the development server:

```bash
npm run dev

```
## 
استخدمت use state عشان احفظ الايميل واللباسزرد بمتغير
وهي بنستخدمها
لحتى نحفظ قيمة متغيرة, بتتغير حسب تفاعل المستخدم
ما بستخدم let email=''
لانه ما رح ينحفظ كل ما react renders
بس ال usestate بتحفظ القيم حتى بعد ال render

1- بسمي المتغير باسم واسم دالة
ex: const[email, setEmail]

2- بساوية بالدالة الجاهزة useState('')
وبعطيه قيمه فاضية لانو هاي بدي استناها من المستخدم رح يكتبها بال input ولما يضغط سبمت بتنحفظ القيمة بمتغير الايميل
3- بالinput بربطها بالفنكنشن تاع الايميل
بخليه onChange= {(e)=> setEmail(e.target.value)}
كل ما المستخدم يكتب حرف بالانبت بتنحفظ القيمة باول باول

**onChange** هو حدث  وظيفته كل ما ينكتب حرف بينفذ الدالة اللي يساويها
يعني 
لما يتغير الحقل بيشغل الدالة
**(e)=>**
هاي arrowfunction 
بتستقبل e 
e حدث التغيير event

**e.target.value**
e: event 
target: input
value: input value

###  خطوات مختصرة بس دائما بهيك تسلسل
1- المستخدم بيدخل بيانات ب form

2- الفرونت اند بحفظ البيانات ب useState

3- لما يغط سبمت للفروم بنكون رابطين الكبسة ب دالة handel login or handel request

4- هاي الدالة تبعث fetc() لملف api محلي جوا مشروع نكست مو باك اند حقيقي

5- ال api هذا بستقبل البيانات وبطبع نتيجة او برجع نتيجة



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
