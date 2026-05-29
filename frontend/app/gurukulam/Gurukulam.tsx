"use client";

import React, { useState, useMemo } from "react";
import { QAPair, formData } from "../../components/UI/Types.types";
import HeroSection from "@/components/gurukulam/Hero";
import StatsBanner from "@/components/gurukulam/StatsBanner";
import SearchBar from "@/components/gurukulam/SearchBar";
import CategoryTabs from "@/components/gurukulam/CategoryTabs";
import KnowledgeGrid from "@/components/gurukulam/KnowledgeGrid";
import MediaModal from "@/components/gurukulam/MediaModal";
import GurukulamJoinSection from "@/components/gurukulam/GurukulamJoinSection";

// (Exhaustive array data paste inside array here)
const EXHAUSTIVE_GURUKULAM_DATA: QAPair[] = [
  {
    id: "surya-arghya",
    category: "daily",
    subBadge: "प्रातः काल कर्म",
    question: "सूर्य अर्घ्य देने की सही वैदिक विधि क्या है?",
    answer:
      "प्रातःकाल सूर्योदय के समय तांबे के पात्र में शुद्ध जल भरकर उसमें लाल चंदन, अक्षत, और लाल पुष्प मिलाएं। पात्र को छाती के ऊपर रख कर धार बनाते हुए जल अर्पित करें।",
    points: [
      "अर्घ्य देते समय मुख पूर्व दिशा की ओर होना चाहिए।",
      "जल की गिरती धार के बीच से सूर्य देव की किरणों को देखना आंखों के लिए अमृत समान है।",
      "अर्घ्य पात्र में कभी भी पैर की छाया या छिटके हुए जल के कण नहीं पड़ने चाहिए।",
    ],
    videoUrl: "https://www.youtube.com/embed/placeholder1",
    imageUrl:
      "https://images.unsplash.com/photo-1545249390-6bdfa286032f?q=80&w=800",
  },
  {
    id: "bhole-baba-jal",
    category: "daily",
    subBadge: "शिव आराधना",
    question: "शिवलिंग पर जल चढ़ाने का सही नियम और दिशा क्या है?",
    answer:
      "शिवलिंग पर हमेशा उत्तर दिशा की ओर मुख करके खड़े या बैठकर जल अर्पित करें, क्योंकि यह दिशा भगवान शिव का बायां अंग (माता पार्वती का स्थान) मानी जाती है।",
    points: [
      "जल अर्पित करते समय धारा अत्यंत पतली और अटूट होनी चाहिए (तैलधारवत्)।",
      "जल अर्पित करने के बाद कभी भी पूरी परिक्रमा न करें, जलाधारी को लांघना वर्जित है।",
      "तांबे के पात्र से कभी भी शिवलिंग पर दूध अर्पित न करें, दूध के लिए पीतल या चांदी का उपयोग करें।",
    ],
    videoUrl: "https://www.youtube.com/embed/placeholder2",
    imageUrl:
      "https://images.unsplash.com/photo-1609137144813-2d2bf7844002?q=80&w=800",
  },
  {
    id: "tarpan-vidhi",
    category: "rituals",
    subBadge: "पितृ कर्म",
    question:
      "ऋषि तर्पण, देव तर्पण और पितृ तर्पण में क्या अंतर है और कैसे करें?",
    answer:
      "तर्पण का अर्थ है तृप्त करना। देवताओं को पूर्व मुख होकर, ऋषियों को उत्तर मुख होकर और पितरों को दक्षिण मुख होकर कुश (विशेष घास) और काले तिल के साथ जल दिया जाता है।",
    points: [
      "देव तर्पण अंगुलियों के अग्रभाग से (देवतीर्थ) दिया जाता है।",
      "ऋषि तर्पण कलाई के मध्य भाग से (ऋषितीर्थ) दिया जाता है।",
      "पितृ तर्पण अंगूठे और तर्जनी के मध्य भाग से (पितृतीर्थ) दक्षिण दिशा की ओर मुख करके दिया जाता है।",
    ],
    videoUrl: "https://www.youtube.com/embed/placeholder3",
    imageUrl:
      "https://images.unsplash.com/photo-1602693680193-41a4a11f267a?q=80&w=800",
  },
  {
    id: "ekadashi-vrat",
    category: "vrats",
    subBadge: "तिथि नियम",
    question: "एकादशी और द्वादशी व्रत का सही नियम और पारण समय क्या है?",
    answer:
      "एकादशी व्रत माधव तिथि है। इसमें दशमी की रात्रि से ही अन्न का त्याग कर दिया जाता है। एकादशी के दिन निर्जला या फलाहारी व्रत रखकर द्वादशी को शुभ मुहूर्त में पारण किया जाता है।",
    points: [
      "एकादशी के दिन चावल (अन्न) का स्पर्श और सेवन पूर्णतः वर्जित है।",
      "द्वादशी के दिन तुलसी दल तोड़ना वर्जित माना गया है, पारण के लिए पूर्व संचित तुलसी का प्रयोग करें।",
      "हरि वासर (द्वादशी की शुरुआती अवधि) समाप्त होने के बाद ही व्रत खोलना शास्त्रसम्मत है।",
    ],
    videoUrl: "https://www.youtube.com/embed/placeholder4",
    imageUrl:
      "https://images.unsplash.com/photo-1561361058-c24cecae35ca?q=80&w=800",
  },
  {
    id: "shodash-sanskar",
    category: "sanskar",
    subBadge: "वैदिक जीवन",
    question: "१६ संस्कार क्या होते हैं और आधुनिक जीवन में इनका क्या महत्व है?",
    answer:
      "गर्भाधान से लेकर अंत्येष्टि तक मानव शरीर और आत्मा को शुद्ध, अनुशासित और दिव्य बनाने के लिए १६ संस्कारों का विधान है। ये केवल कर्मकांड नहीं, बल्कि पूर्णतः वैज्ञानिक जीवन पद्धति हैं।",
    points: [
      "पुंसवन और सीमंतोन्नयन संस्कार गर्भस्थ शिशु के मानसिक विकास को गति देते हैं।",
      "उपनयन (जनेऊ) संस्कार से बालक में बौद्धिक चेतना और एकाग्रता का बीजारोपण होता है।",
      "विवाह संस्कार दो आत्माओं का धर्मानुकूल संयोजन है, जो समाज के संतुलन को बनाए रखता।",
    ],
    videoUrl: "https://www.youtube.com/embed/placeholder5",
    imageUrl:
      "https://images.unsplash.com/photo-1602693680193-41a4a11f267a?q=80&w=800",
  },
  {
    id: "tirth-maryada",
    category: "tirth",
    subBadge: "यात्रा शुद्धि",
    question:
      "तीर्थ यात्रा में क्या करना चाहिए और किन वर्जित कार्यों से बचना चाहिए?",
    answer:
      "तीर्थों में किया गया पुण्य अनंत गुना होता है, परंतु वहां किया गया मानसिक या शारीरिक पाप भी वज्रलेप (अमिट) हो जाता है। इसलिए तीर्थ क्षेत्र में विशेष सावधानी आवश्यक है।",
    points: [
      "तीर्थ में स्नान करते समय कभी भी साबुन या शैम्पू का प्रयोग कर जल प्रदूषित न करें।",
      "वहां किसी भी प्रकार की व्यावसायिक चालाकी, झूठ, या किसी जीव की निंदा करने से बचें।",
      "स्थानीय संतों, निर्धनों और गौ-वंश की अपनी सामर्थ्य अनुसार सेवा अवश्य करें।",
    ],
    videoUrl: "https://www.youtube.com/embed/placeholder6",
    imageUrl:
      "https://images.unsplash.com/photo-1545249390-6bdfa286032f?q=80&w=800",
  },
];

export default function SanatanGurukulamPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "image" | "video";
    url: string;
    title: string;
  }>({
    isOpen: false,
    type: "image",
    url: "",
    title: "",
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    purpose: "learn",
    message: "",
  } as formData);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      alert(
        "Registration successful! Gurukulam Secretariat will contact you soon.",
      );
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        purpose: "learn",
        message: "",
      });
    }, 1500);
  };

  const categories = [
    { id: "all", label: "संपूर्ण ज्ञानकोष" },
    { id: "daily", label: "दैनिक नित्य कर्म" },
    { id: "rituals", label: "तर्पण एवं पूजा" },
    { id: "sanskar", label: "१६ संस्कार विधान" },
    { id: "tirth", label: "तीर्थ यात्रा मर्यादा" },
    { id: "vrats", label: "व्रत एवं तिथियां" },
  ];

  const filteredQuestions = useMemo(() => {
    return EXHAUSTIVE_GURUKULAM_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-[#FCFAF5] min-h-screen antialiased selection:bg-[#D4A017] selection:text-[#130B07]">
      <HeroSection />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <StatsBanner />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 h-fit">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <CategoryTabs
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>

          <div className="lg:col-span-8">
            <KnowledgeGrid
              data={filteredQuestions}
              onResetSearch={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              onOpenMedia={(type, url, title) =>
                setModalState({ isOpen: true, type, url, title })
              }
            />
          </div>
        </div>
      </section>

      <GurukulamJoinSection formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
      <MediaModal
        isOpen={modalState.isOpen}
        type={modalState.type}
        url={modalState.url}
        title={modalState.title}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
      />
    </div>
  );
}
