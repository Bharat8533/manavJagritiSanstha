"use client";

import React, { useState } from "react";
import { BlogPost } from "../UI/Types.types";

const BLOGS_DATA: BlogPost[] = [
  {
    id: 1,
    category: "धरोहर संरक्षण",
    title: "श्री वृंदावन के प्राचीन कुंडों का जीर्णोद्धार: एक ऐतिहासिक पहल",
    excerpt:
      "जानिए कैसे हमारी संस्था ब्रज के लुप्त हो रहे प्राचीन पवित्र कुंडों और घाटों को उनके मूल स्वरूप में वापस लाने के लिए निरंतर प्रयास कर रही है। इसमें स्थानीय समुदाय का सहयोग और प्राचीन वास्तुकला तकनीकों का उपयोग किया जा रहा है...",
    content: `ब्रज भूमि का प्रत्येक कण दिव्य और ऐतिहासिक है। यहाँ के प्राचीन कुंड और घाट केवल जल स्रोत नहीं हैं, बल्कि द्वापरयुगीन लीलाओं के जीवंत गवाह हैं। समय के थपेड़ों और उपेक्षा के कारण, इनमें से कई पवित्र स्थल लुप्त होने की कगार पर पहुँच गए थे।

हमारी संस्था ने इन धरोहरों के संरक्षण का बीड़ा उठाया है। वर्तमान में, श्री वृंदावन और निकटवर्ती क्षेत्रों के तीन प्रमुख कुंडों पर जीर्णोद्धार कार्य युद्ध स्तर पर चल रहा है। 

**मुख्य आकर्षण एवं कार्य योजना:**
1. **प्राकृतिक गाद की सफाई:** आधुनिक मशीनों के बजाय पारंपरिक तरीकों का उपयोग करके सदियों पुरानी गाद को हटाया जा रहा है ताकि प्राकृतिक जल स्रोत पुनर्जीवित हो सकें।
2. **घाटों का पुनर्निर्माण:** स्थानीय लाल बलुआ पत्थरों (Sandstone) का उपयोग करके प्राचीन राजपूताना और ब्रज वास्तुकला शैली में घाटों की दीवारों को सुदृढ़ किया जा रहा है।
3. **पारिस्थितिक संतुलन:** कुंडों के चारों ओर कदम, तमाल और पीपल जैसे दिव्य वृक्षों का रोपण किया जा रहा है ताकि ब्रज की प्राचीन वन-संपदा को वापस लाया जा सके।

इस पुनीत कार्य में स्थानीय ब्रजवासियों और देश-विदेश से आए श्रद्धालुओं का श्रमदान हमें निरंतर ऊर्जा प्रदान कर रहा है। आइए, हम सब मिलकर अपनी इस अमूल्य सांस्कृतिक विरासत को सुरक्षित रखें।`,
    date: "May 20, 2026",
    readTime: "5 min read",
    image: "https://mjsvrindavan.com/wp-content/uploads/2024/07/slide3.webp",
    featured: true,
  },
  {
    id: 2,
    category: "गौ सेवा",
    title: "भीषण गर्मी में गौवंश की विशेष चिकित्सा और भरण-पोषण व्यवस्था",
    excerpt:
      "इस महीने संस्था द्वारा संचालित गौशाला में बीमार और असहाय गौ माताओं के लिए विशेष वेंटिलेशन, फॉगर सिस्टम और शीतल आयुर्वेदिक जल की व्यवस्था शुरू की गई है।",
    content: `जेठ और आषाढ़ की इस तपती गर्मी में मूक गौवंश की रक्षा करना हमारा परम कर्तव्य है। हमारी मुख्य गौशाला में वर्तमान में 500 से अधिक निराश्रित, वृद्ध और अस्वस्थ गौवंश की सेवा की जा रही है।

तापमान में अप्रत्याशित वृद्धि को देखते हुए संस्था के चिकित्सा दल और प्रबंधकों ने आपातकालीन कदम उठाए हैं:

**गर्मी से बचाव के विशेष उपाय:**
* **फॉगर और कूलिंग सिस्टम:** गौशाला के सभी मुख्य शेड्स में आधुनिक फॉगर सिस्टम (जल-कण फुहार) लगाए गए हैं, जो तापमान को 5 से 7 डिग्री तक कम रखते हैं।
* **आयुर्वेदिक शीतल पेय:** पानी के हौदों में नियमित रूप से बेल, गुड़, और विशेष औषधीय जड़ी-बूटियों का मिश्रण मिलाया जा रहा है ताकि लू से बचाव हो सके।
* **24/7 चिकित्सा दल:** डॉक्टरों की टीम थकावट या डिहाइड्रेशन के लक्षणों पर कड़ी नजर रख रही है और आपातकालीन ग्लूकोज ड्रिप की व्यवस्था की गई है।

गौ माता की सेवा ही साक्षात गोविंद की सेवा है। आपका छोटा सा सहयोग भी इन बेजुबान जीवों को इस भीषण गर्मी से राहत दिला सकता है।`,
    date: "May 18, 2026",
    readTime: "3 min read",
    image: "https://mjsvrindavan.com/wp-content/uploads/2024/06/baba_bg.webp",
    featured: false,
  },
  {
    id: 3,
    category: "संत वाणी",
    title: "भक्ति मार्ग में निरंतरता का महत्व: पूज्य महाराज जी के प्रवचन",
    excerpt:
      "श्री निम्बार्क ब्रजराज जी महाराज ने इस साप्ताहिक सत्संग में बताया कि कैसे गृहस्थ जीवन में रहते हुए भी नाम संकीर्तन और मानसिक जप का आश्रय लिया जा सकता है।",
    content: `इस रविवार को आयोजित विशेष सत्संग सभा में पूज्य महाराज जी ने भक्तों का मार्गदर्शन करते हुए 'साधन-भक्ति' के व्यावहारिक पक्षों पर प्रकाश डाला।

महाराज जी ने कहा कि भक्ति कोई ऐसी क्रिया नहीं है जिसे केवल सुबह-शाम मंदिर में बैठकर किया जाए। वास्तविक भक्ति वह है जो आपके जीवन की प्रत्येक सांस में घुल जाए।

**प्रवचन के मुख्य बिंदु:**
* **मानसिक जप का अभ्यास:** जब हाथ काम कर रहे हों, तब भी मन को ठाकुर जी के चरणों में लगाया जा सकता है। नाम का निरंतर मानसिक उच्चारण ही मन को शुद्ध करता है।
* **गृहस्थ धर्म और सेवा:** अपने परिवार की सेवा को ठाकुर जी की सेवा मानकर करना ही सच्चा संन्यास है। किसी के प्रति कटु वचन न बोलना भी एक प्रकार का तप है।
* **सत्संग की अनिवार्यता:** जैसे भोजन शरीर को ऊर्जा देता है, वैसे ही सत्संग हमारी आत्मा को कुमार्ग पर जाने से रोकता है।

साधकों को चाहिए कि वे प्रतिदिन कम से कम 15 मिनट मौन रहकर केवल नाम संकीर्तन का रसास्वादन करें।`,
    date: "May 12, 2026",
    readTime: "4 min read",
    image: "https://mjsvrindavan.com/wp-content/uploads/2024/07/slide3.webp",
    featured: false,
  },
  {
    id: 4,
    category: "यमुना सेवा",
    title: "कालिन्दी संरक्षण: श्री यमुना जी की स्वच्छता हेतु महा-अभियान",
    excerpt:
      "संस्था के स्वयंसेवकों द्वारा केशी घाट और आस-पास के क्षेत्रों में साप्ताहिक स्वच्छता अभियान और जन-जागरूकता कार्यक्रम का आयोजन। आइए इस पावन नदी को स्वच्छ बनाएं।",
    content: `श्री यमुना जी केवल एक नदी नहीं हैं, वे ब्रज की अधिष्ठात्री देवी और साक्षात भक्ति स्वरूपा हैं। यमुना जी के स्वच्छ और अविरल प्रवाह के बिना ब्रज का अस्तित्व अधूरा है।

पिछले कुछ समय से घाटों पर बढ़ती प्लास्टिक और कचरे की समस्या को देखते हुए हमारी युवा विंग ने 'कालिन्दी महा-स्वच्छता अभियान' की शुरुआत की है।

**अभियान की प्रमुख रणनीतियाँ:**
1. **साप्ताहिक श्रमदान:** प्रत्येक शनिवार और रविवार की सुबह 6 से 9 बजे तक स्वयंसेवक केशी घाट और धीर समीर क्षेत्र में कचरा संग्रहण करते हैं।
2. **बायो-डस्टबिन की स्थापना:** घाटों पर आने वाले तीर्थयात्रियों के लिए विशेष रूप से डिजाइन किए गए पर्यावरण-अनुकूल कूड़ेदान स्थापित किए जा रहे हैं।
3. **नाविकों और दुकानदारों से संवाद:** स्थानीय व्यापारिक समुदाय को जागरूक किया जा रहा है ताकि वे नदियों में पूजन सामग्री या प्लास्टिक विसर्जित न करें।

यह कार्य केवल एक संस्था का नहीं, बल्कि संपूर्ण मानव जाति का है। जब तक हमारी नदियाँ सुरक्षित नहीं होंगी, हमारी संस्कृति सुरक्षित नहीं रह सकती।`,
    date: "May 10, 2026",
    readTime: "6 min read",
    image: "https://mjsvrindavan.com/wp-content/uploads/2024/06/baba_bg.webp",
    featured: false,
  },
  {
    id: 5,
    category: "संस्था अपडेट",
    title: "आगामी नि:शुल्क चिकित्सा एवं स्वास्थ्य जांच शिविर की रूपरेखा",
    excerpt:
      "ब्रज क्षेत्र के ग्रामीण इलाकों में रहने वाले जरूरतमंद परिवारों और साधु-संतों के लिए संस्था द्वारा आयोजित होने वाले विशाल शिविर की तारीखें और पंजीकरण प्रक्रिया।",
    content: `मानव सेवा ही माधव सेवा के मूल मंत्र को चरितार्थ करते हुए, संस्था आगामी माह में एक वृहद नि:शुल्क चिकित्सा शिविर का आयोजन करने जा रही है। यह शिविर विशेष रूप से उन संतों, वैरागियों और ग्रामीण परिवारों के लिए है जो उचित चिकित्सा सुविधाओं से वंचित रह जाते हैं।

**शिविर का विवरण:**
* **दिनांक और स्थान:** 15 जून से 17 जून, संस्था परिसर, परिक्रमा मार्ग, श्री वृंदावन।
* **विशेषज्ञ डॉक्टरों की टीम:** दिल्ली और मथुरा के प्रसिद्ध हृदय रोग, नेत्र रोग और सामान्य चिकित्सा विशेषज्ञ अपनी सेवाएं देंगे।
* **नि:शुल्क दवाइयां और चश्मे:** जांच के उपरांत सभी मरीजों को आवश्यक दवाइयां तथा मोतियाबिंद की शुरुआती जांच के बाद आवश्यक चश्मे पूरी तरह नि:शुल्क वितरित किए जाएंगे।

यदि आपके आस-पास कोई भी ऐसा असहाय या साधु-संत हो जिसे चिकित्सा की आवश्यकता हो, तो कृपया उनका पंजीकरण संस्था के कार्यालय में अवश्य करवाएं।`,
    date: "May 08, 2026",
    readTime: "2 min read",
    image: "https://mjsvrindavan.com/wp-content/uploads/2024/06/baba_bg.webp",
    featured: false,
  },
  {
    id: 6,
    category: "धरोहर संरक्षण",
    title: "ब्रज की सांझी कला: एक विलुप्त होती प्राचीन धरोहर का पुनरुत्थान",
    excerpt:
      "मंदिरों की इस पारंपरिक कला को जीवित रखने के लिए संस्था द्वारा युवा कलाकारों के लिए कार्यशाला का आयोजन किया जा रहा है। जानिए इसका गौरवशाली इतिहास।",
    content: `सांझी कला ब्रज की एक अत्यंत अनूठी और पारंपरिक कला विधा है, जिसमें सूखे रंगों, फूलों या केलों के पत्तों के स्टेंसिल का उपयोग करके सुंदर कलाकृतियां और ठाकुर जी की लीलाएं उकेरी जाती हैं। प्राचीन काल में वैष्णव मंदिरों में इस कला का विशेष स्थान था।

धीरे-धीरे इस कला को जानने वाले उस्ताद कम होते जा रहे हैं। इस चिंता को दूर करने के लिए हमारी सांस्कृतिक शाखा ने एक नई पहल की है।

**पुनरुत्थान कार्यक्रम के बिंदु:**
1. **15 दिवसीय कार्यशाला:** स्थानीय विद्यालयों और कला के छात्रों के लिए अनुभवी सांझी कलाकारों की देखरेख में एक पूर्णतः नि:शुल्क प्रशिक्षण कार्यक्रम।
2. **प्रदर्शनी और पुरस्कार:** कार्यशाला के अंत में सर्वश्रेष्ठ कलाकृतियों की एक भव्य प्रदर्शनी लगाई जाएगी और कलाकारों को सम्मानित किया जाएगा।
3. **डिजिटल प्रलेखन:** इस कला के इतिहास और तकनीकों पर एक लघु वृत्तचित्र (Documentary) भी तैयार की जा रही है ताकि आने वाली पीढ़ियां इसे सीख सकें।

सांझी केवल कला नहीं, ठाकुर जी को रिझाने का एक अनन्य माध्यम है। इसका संरक्षण हमारी सांस्कृतिक अस्मिता की रक्षा है।`,
    date: "May 02, 2026",
    readTime: "5 min read",
    image: "https://mjsvrindavan.com/wp-content/uploads/2024/07/slide3.webp",
    featured: false,
  },
];

const CATEGORIES : string[] = [
  "सभी लेख",
  "गौ सेवा",
  "संत वाणी",
  "धरोहर संरक्षण",
  "यमुना सेवा",
  "संस्था अपडेट",
];

export default function AllBlogs() {
  const [activeCategory, setActiveCategory] = useState("सभी लेख");
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  const isAll = activeCategory === "सभी लेख";

  const filteredGridBlogs = isAll
    ? BLOGS_DATA.filter((b) => !b.featured)
    : BLOGS_DATA.filter((b) => b.category === activeCategory);

  const featuredBlog : BlogPost | undefined = BLOGS_DATA.find((b) => b.featured);

  return (
    <div className="bg-[#FCFAF5] min-h-screen text-[#2C1810] selection:bg-[#A63D00]/10 antialiased relative">
      {/* HEADER SECTION */}
      <section className="pt-24 pb-8 px-6 md:px-12 max-w-[1400px] mx-auto text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D4A017]/20 pb-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#A63D00]/5 border border-[#A63D00]/15 text-[#A63D00] text-[0.65rem] font-bold tracking-[0.3em] uppercase px-3 py-1 rounded-full mb-3">
              पत्रिका एवं विचार
            </span>
            <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold text-[#2C1810] leading-tight">
              ब्रज संदेश{" "}
              <span className="text-[#A63D00] font-sans font-light text-[0.6em] ml-2">
                | Insights & Updates
              </span>
            </h1>
            <p className="text-[#5C3A1E]/80 text-sm mt-3 font-light leading-relaxed">
              संस्था के सेवा कार्यों, पूज्य महाराज जी के दिव्य प्रवचनों, और
              सनातन संस्कृति से जुड़े नवीनतम लेखों का संग्रह।
            </p>
          </div>

          {/* SCROLLABLE CATEGORY BAR */}
          <div className="flex gap-2 overflow-x-auto pb-2 pt-4 scrollbar-none max-w-full md:max-w-xl">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 whitespace-nowrap border cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#2C1810] text-[#F4D28C] border-[#2C1810] shadow-md shadow-[#2C1810]/10"
                    : "bg-white text-[#5C3A1E]/80 border-[#D4A017]/20 hover:border-[#A63D00]/40 hover:text-[#A63D00]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED HERO BANNER */}
      {isAll && featuredBlog && (
        <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-16">
          <div className="bg-white rounded-3xl overflow-hidden border border-[#D4A017]/15 shadow-[0_10px_40px_rgba(44,24,16,0.03)] grid grid-cols-1 lg:grid-cols-12 group">
            <div className="lg:col-span-7 h-[300px] sm:h-[400px] lg:h-auto relative overflow-hidden bg-[#2C1810]">
              <img
                src={featuredBlog.image}
                alt={featuredBlog.title}
                className="w-full h-full object-cover transform group-hover:scale-[1.02] transition duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 bg-[#A63D00] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-md">
                मुख्य लेख ★
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-gradient-to-br from-white to-[#FCFAF5]/30">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-[#5C3A1E]/60 font-medium">
                  <span className="text-[#A63D00] font-semibold">
                    {featuredBlog.category}
                  </span>
                  <span>•</span>
                  <span>{featuredBlog.date}</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1810] leading-snug group-hover:text-[#A63D00] transition-colors duration-300">
                  <button
                    onClick={() => setSelectedBlog(featuredBlog)}
                    className="text-left block w-full"
                  >
                    {featuredBlog.title}
                  </button>
                </h2>
                <p className="text-sm text-[#5C3A1E]/80 font-light leading-relaxed">
                  {featuredBlog.excerpt}
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-[#D4A017]/10 flex items-center justify-between">
                <span className="text-xs text-[#5C3A1E]/50 font-medium">
                  {featuredBlog.readTime}
                </span>
                <button
                  onClick={() => setSelectedBlog(featuredBlog)}
                  className="text-xs font-bold uppercase tracking-wider text-[#A63D00] hover:text-[#2C1810] transition-colors flex items-center gap-2 group/btn cursor-pointer"
                >
                  विस्तार से पढ़ें
                  <span className="transform group-hover/btn:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SUBHEADING FOR LATEST POSTS */}
      {isAll && (
        <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-6 text-left">
          <h3 className="font-serif text-xl font-bold text-[#2C1810]">
            नवीनतम प्रकाशन
          </h3>
          <div className="w-12 h-[2px] bg-[#A63D00] mt-1.5 rounded-full"></div>
        </div>
      )}

      {/* BLOGS MAIN GRID */}
      <section className="pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {filteredGridBlogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#D4A017]/10 shadow-[0_4px_25px_rgba(44,24,16,0.02)] hover:shadow-[0_20px_45px_rgba(44,24,16,0.07)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
            >
              <div className="h-52 relative overflow-hidden bg-[#2C1810]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500 ease-out"
                />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-[#A63D00] text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-sm border border-[#D4A017]/10">
                  {blog.category}
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <div className="text-[11px] text-[#5C3A1E]/60 font-medium tracking-wide">
                    {blog.date}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#2C1810] leading-snug group-hover:text-[#A63D00] transition-colors duration-300 line-clamp-2">
                    <button
                      onClick={() => setSelectedBlog(blog)}
                      className="text-left block w-full"
                    >
                      {blog.title}
                    </button>
                  </h4>
                  <p className="text-[0.85rem] text-[#5C3A1E]/75 font-light leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#D4A017]/10 flex items-center justify-between">
                  <span className="text-[11px] text-[#5C3A1E]/50 font-medium">
                    {blog.readTime}
                  </span>
                  <button
                    onClick={() => setSelectedBlog(blog)}
                    className="text-xs font-bold uppercase tracking-wider text-[#A63D00] hover:text-[#2C1810] transition-colors flex items-center gap-1 group/link cursor-pointer"
                  >
                    पढ़ें{" "}
                    <span className="transform group-hover/link:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredGridBlogs.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-[#D4A017]/20 max-w-md mx-auto shadow-sm">
            <span className="text-4xl block mb-3 opacity-80">📜</span>
            <h4 className="font-serif text-base font-bold text-[#2C1810]">
              इस श्रेणी में अभी कोई लेख नहीं है
            </h4>
            <p className="text-xs text-[#5C3A1E]/70 mt-1.5 max-w-xs mx-auto leading-relaxed">
              संस्था द्वारा इस विषय पर जल्द ही नए विचार और विवरण साझा किए
              जाएंगे।
            </p>
          </div>
        )}
      </section>

      {/* PREMIUM ARTICLE READING MODAL */}
      {selectedBlog && (
        <div className="fixed inset-0 z-1000 flex items-center justify-center p-4 sm:p-6 bg-[#2C1810]/40 backdrop-blur-md transition-opacity duration-300 animate-fadeIn text-left">
          {/* Backdrop Click Closer */}
          <div
            className="absolute inset-0"
            onClick={() => setSelectedBlog(null)}
          />

          {/* Modal Box */}
          <div className="bg-white w-full max-w-3xl max-h-[85vh] rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(44,24,16,0.25)] border border-[#D4A017]/20 relative z-10 flex flex-col transform transition-all duration-300 scale-100">
            {/* Sticky Minimal Header */}
            <div className="px-6 py-4 border-b border-[#D4A017]/10 bg-white/90 backdrop-blur-sm sticky top-0 flex items-center justify-between z-20">
              <div className="flex items-center gap-2 text-xs">
                <span className="bg-[#A63D00]/10 text-[#A63D00] px-2.5 py-1 rounded-full font-semibold">
                  {selectedBlog.category}
                </span>
                <span className="text-[#5C3A1E]/40">•</span>
                <span className="text-[#5C3A1E]/60 font-medium">
                  {selectedBlog.readTime}
                </span>
              </div>
              <button
                onClick={() => setSelectedBlog(null)}
                className="w-8 h-8 rounded-full bg-[#FCFAF5] border border-[#D4A017]/10 flex items-center justify-center text-[#2C1810] hover:bg-[#A63D00] hover:text-white transition-all duration-200 shadow-sm font-sans text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Content Engine */}
            <div className="overflow-y-auto p-6 sm:p-10 space-y-6 scrollbar-thin">
              {/* Feature Landscape Banner Image inside Article */}
              <div className="w-full h-48 sm:h-72 rounded-2xl overflow-hidden bg-[#2C1810]">
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Date & Metadata */}
              <div className="text-xs text-[#5C3A1E]/50 font-medium">
                प्रकाशित तिथि: {selectedBlog.date}
              </div>

              {/* Article Headline */}
              <h2 className="font-serif text-xl sm:text-3xl font-bold text-[#2C1810] leading-snug border-b border-[#D4A017]/15 pb-4">
                {selectedBlog.title}
              </h2>

              {/* Body Content with Native Formatting */}
              <div className="text-[#2C1810]/90 text-sm sm:text-base font-light leading-relaxed whitespace-pre-line space-y-4 font-sans tracking-wide">
                {selectedBlog.content || selectedBlog.excerpt}
              </div>
            </div>

            {/* Premium Sticky Footer Action */}
            <div className="p-4 bg-[#FCFAF5] border-t border-[#D4A017]/10 flex justify-end gap-3">
              <button
                onClick={() => setSelectedBlog(null)}
                className="px-6 py-2 rounded-xl text-xs font-semibold bg-[#2C1810] text-[#F4D28C] hover:bg-[#A63D00] hover:text-white transition-colors duration-300 cursor-pointer"
              >
                पढ़ना समाप्त करें
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
