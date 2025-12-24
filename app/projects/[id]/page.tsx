import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectDetailHero from './ProjectDetailHero';
import ProjectInfo from './ProjectInfo';
import ProjectGallery from './ProjectGallery';
import ProjectDescription from './ProjectDescription';
import RelatedProjects from './RelatedProjects';
import ProjectCTA from './ProjectCTA';

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ];
}

type ProjectDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const projectsData: Record<string, any> = {
    '1': {
      title: 'فيلا سكنية فاخرة',
      category: 'مشروع سكني',
      location: 'الرياض، المملكة العربية السعودية',
      image: 'https://readdy.ai/api/search-image?query=Luxurious%20modern%20residential%20villa%20exterior%20with%20elegant%20architecture%2C%20beautiful%20landscaping%2C%20contemporary%20design%2C%20high-end%20finishes%2C%20Saudi%20Arabian%20style%2C%20professional%20photography%2C%20bright%20daylight%2C%20clean%20simple%20background&width=1920&height=1080&seq=project1hero&orientation=landscape',
      description: 'مشروع فيلا سكنية فاخرة يجمع بين الفخامة والراحة، تم تصميمها بأسلوب عصري يلبي احتياجات العائلة الحديثة. يتميز المشروع بمساحات واسعة ومفتوحة، مع اهتمام خاص بالتفاصيل الداخلية والخارجية. تم استخدام أفضل المواد والتشطيبات لضمان جودة عالية ومتانة طويلة الأمد.',
      challenges: [
        'التعامل مع المساحة الكبيرة وتوزيع الغرف بشكل مثالي',
        'دمج التصميم العصري مع الطابع التقليدي المحلي',
        'ضمان الخصوصية مع الحفاظ على الإضاءة الطبيعية',
        'اختيار المواد المناسبة للمناخ الحار'
      ],
      solutions: [
        'تصميم مخطط معماري ذكي يوفر مساحات متعددة الاستخدامات',
        'استخدام عناصر معمارية تقليدية بأسلوب عصري',
        'تصميم نوافذ استراتيجية مع استخدام الزجاج العاكس',
        'اختيار مواد عازلة للحرارة وصديقة للبيئة'
      ],
      images: [
        'https://readdy.ai/api/search-image?query=Luxurious%20modern%20villa%20exterior%20front%20view%20with%20elegant%20architecture%2C%20beautiful%20landscaping%2C%20contemporary%20design%2C%20high-end%20finishes%2C%20professional%20photography%2C%20bright%20daylight%2C%20clean%20simple%20background&width=1920&height=1080&seq=project1img1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Modern%20luxury%20villa%20interior%20living%20room%20with%20elegant%20furniture%2C%20high%20ceilings%2C%20large%20windows%2C%20contemporary%20design%2C%20professional%20photography%2C%20bright%20natural%20lighting%2C%20clean%20simple%20background&width=1920&height=1080&seq=project1img2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Luxury%20villa%20master%20bedroom%20interior%20with%20elegant%20design%2C%20modern%20furniture%2C%20soft%20lighting%2C%20contemporary%20style%2C%20professional%20photography%2C%20clean%20simple%20background&width=1920&height=1080&seq=project1img3&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Modern%20villa%20kitchen%20interior%20with%20high-end%20appliances%2C%20elegant%20cabinets%2C%20marble%20countertops%2C%20contemporary%20design%2C%20professional%20photography%2C%20bright%20lighting%2C%20clean%20simple%20background&width=1920&height=1080&seq=project1img4&orientation=landscape'
      ]
    },
    '2': {
      title: 'شقة عصرية مودرن',
      category: 'مشروع سكني',
      location: 'جدة، المملكة العربية السعودية',
      image: 'https://readdy.ai/api/search-image?query=Modern%20contemporary%20apartment%20interior%20with%20stylish%20furniture%2C%20open%20space%20design%2C%20elegant%20decor%2C%20professional%20photography%2C%20bright%20natural%20lighting%2C%20clean%20simple%20background&width=1920&height=1080&seq=project2hero&orientation=landscape',
      description: 'شقة عصرية بتصميم مودرن يجمع بين البساطة والأناقة. تم تصميم المساحات بذكاء لتوفير أقصى استفادة من كل متر مربع، مع التركيز على الإضاءة الطبيعية والألوان الهادئة التي تخلق جواً من الراحة والاسترخاء.',
      challenges: [
        'المساحة المحدودة وضرورة استغلالها بكفاءة',
        'توفير مساحات تخزين كافية دون التأثير على التصميم',
        'خلق شعور بالاتساع في مساحة محدودة',
        'دمج التقنيات الذكية بشكل سلس'
      ],
      solutions: [
        'استخدام أثاث متعدد الوظائف وحلول تخزين ذكية',
        'تصميم خزائن مدمجة بشكل أنيق وعملي',
        'استخدام الألوان الفاتحة والمرايا لتوسيع المساحة بصرياً',
        'دمج أنظمة الإضاءة والتحكم الذكية بشكل غير مرئي'
      ],
      images: [
        'https://readdy.ai/api/search-image?query=Modern%20apartment%20living%20room%20interior%20with%20contemporary%20furniture%2C%20open%20space%2C%20elegant%20design%2C%20professional%20photography%2C%20bright%20natural%20lighting%2C%20clean%20simple%20background&width=1920&height=1080&seq=project2img1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Contemporary%20apartment%20bedroom%20interior%20with%20modern%20furniture%2C%20soft%20colors%2C%20elegant%20design%2C%20professional%20photography%2C%20natural%20lighting%2C%20clean%20simple%20background&width=1920&height=1080&seq=project2img2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Modern%20apartment%20kitchen%20interior%20with%20sleek%20cabinets%2C%20contemporary%20appliances%2C%20elegant%20design%2C%20professional%20photography%2C%20bright%20lighting%2C%20clean%20simple%20background&width=1920&height=1080&seq=project2img3&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Modern%20apartment%20bathroom%20interior%20with%20elegant%20fixtures%2C%20contemporary%20design%2C%20clean%20lines%2C%20professional%20photography%2C%20bright%20lighting%2C%20clean%20simple%20background&width=1920&height=1080&seq=project2img4&orientation=landscape'
      ]
    },
    '3': {
      title: 'مركز تجاري متكامل',
      category: 'مشروع تجاري',
      location: 'الدمام، المملكة العربية السعودية',
      image: 'https://readdy.ai/api/search-image?query=Modern%20commercial%20center%20building%20exterior%20with%20glass%20facade%2C%20contemporary%20architecture%2C%20professional%20photography%2C%20bright%20daylight%2C%20clean%20simple%20background&width=1920&height=1080&seq=project3hero&orientation=landscape',
      description: 'مركز تجاري متكامل يضم مجموعة متنوعة من المحلات والمكاتب. تم تصميمه ليكون وجهة تجارية رائدة في المنطقة، مع التركيز على سهولة الحركة والوصول، وتوفير بيئة عمل مريحة وجذابة للزوار والمستأجرين.',
      challenges: [
        'تصميم مساحات تجارية متنوعة تناسب احتياجات مختلفة',
        'ضمان سهولة الحركة والوصول لجميع الطوابق',
        'توفير مواقف سيارات كافية',
        'خلق هوية بصرية مميزة للمركز'
      ],
      solutions: [
        'تصميم وحدات تجارية مرنة قابلة للتخصيص',
        'استخدام مصاعد ومداخل متعددة مع لافتات واضحة',
        'تصميم مواقف سيارات متعددة الطوابق',
        'استخدام واجهات زجاجية مميزة وإضاءة معمارية'
      ],
      images: [
        'https://readdy.ai/api/search-image?query=Modern%20commercial%20center%20exterior%20with%20glass%20facade%2C%20contemporary%20architecture%2C%20professional%20photography%2C%20bright%20daylight%2C%20clean%20simple%20background&width=1920&height=1080&seq=project3img1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Commercial%20center%20interior%20lobby%20with%20modern%20design%2C%20elegant%20finishes%2C%20professional%20photography%2C%20bright%20lighting%2C%20clean%20simple%20background&width=1920&height=1080&seq=project3img2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Modern%20commercial%20office%20space%20interior%20with%20contemporary%20furniture%2C%20open%20layout%2C%20professional%20photography%2C%20bright%20lighting%2C%20clean%20simple%20background&width=1920&height=1080&seq=project3img3&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Commercial%20center%20retail%20space%20interior%20with%20modern%20design%2C%20elegant%20displays%2C%20professional%20photography%2C%20bright%20lighting%2C%20clean%20simple%20background&width=1920&height=1080&seq=project3img4&orientation=landscape'
      ]
    },
    '4': {
      title: 'شقة عائلية دافئة',
      category: 'مشروع سكني',
      location: 'مكة المكرمة، المملكة العربية السعودية',
      image: 'https://readdy.ai/api/search-image?query=Warm%20cozy%20family%20apartment%20interior%20with%20comfortable%20furniture%2C%20welcoming%20atmosphere%2C%20contemporary%20design%2C%20professional%20photography%2C%20natural%20lighting%2C%20clean%20simple%20background&width=1920&height=1080&seq=project4hero&orientation=landscape',
      description: 'شقة عائلية مصممة لتوفير أجواء دافئة ومريحة لجميع أفراد العائلة. تم التركيز على خلق مساحات مشتركة تجمع العائلة، مع توفير خصوصية كافية لكل فرد. التصميم يجمع بين الوظيفية والجمال.',
      challenges: [
        'تلبية احتياجات جميع أفراد العائلة من مختلف الأعمار',
        'خلق توازن بين المساحات المشتركة والخاصة',
        'اختيار مواد آمنة ومتينة مناسبة للأطفال',
        'توفير مساحات لعب وترفيه داخلية'
      ],
      solutions: [
        'تصميم مساحات مرنة قابلة للتكيف مع احتياجات العائلة',
        'فصل واضح بين مناطق المعيشة والنوم',
        'استخدام مواد صديقة للبيئة وسهلة التنظيف',
        'تخصيص غرفة متعددة الاستخدامات للعب والدراسة'
      ],
      images: [
        'https://readdy.ai/api/search-image?query=Cozy%20family%20apartment%20living%20room%20with%20comfortable%20furniture%2C%20warm%20colors%2C%20welcoming%20atmosphere%2C%20professional%20photography%2C%20natural%20lighting%2C%20clean%20simple%20background&width=1920&height=1080&seq=project4img1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Family%20apartment%20dining%20area%20with%20modern%20furniture%2C%20warm%20atmosphere%2C%20contemporary%20design%2C%20professional%20photography%2C%20bright%20lighting%2C%20clean%20simple%20background&width=1920&height=1080&seq=project4img2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Family%20apartment%20children%20bedroom%20with%20playful%20design%2C%20safe%20furniture%2C%20colorful%20decor%2C%20professional%20photography%2C%20bright%20lighting%2C%20clean%20simple%20background&width=1920&height=1080&seq=project4img3&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Family%20apartment%20kitchen%20with%20modern%20appliances%2C%20functional%20design%2C%20warm%20atmosphere%2C%20professional%20photography%2C%20bright%20lighting%2C%20clean%20simple%20background&width=1920&height=1080&seq=project4img4&orientation=landscape'
      ]
    },
    '5': {
      title: 'قصر ملكي فخم',
      category: 'مشروع سكني',
      location: 'الرياض، المملكة العربية السعودية',
      image: 'https://readdy.ai/api/search-image?query=Luxurious%20royal%20palace%20exterior%20with%20grand%20architecture%2C%20elegant%20design%2C%20beautiful%20landscaping%2C%20professional%20photography%2C%20bright%20daylight%2C%20clean%20simple%20background&width=1920&height=1080&seq=project5hero&orientation=landscape',
      description: 'قصر ملكي فخم يجسد قمة الفخامة والرقي. تم تصميمه بأسلوب معماري يجمع بين الأصالة والحداثة، مع استخدام أفخر المواد والتشطيبات. يضم القصر مساحات واسعة للاستقبال والمعيشة، بالإضافة إلى حدائق خلابة ومرافق ترفيهية متكاملة.',
      challenges: [
        'تصميم مساحات ضخمة مع الحفاظ على الدفء والراحة',
        'دمج الطابع التقليدي مع التقنيات الحديثة',
        'ضمان الخصوصية والأمان على مستوى عالٍ',
        'تنسيق الحدائق والمساحات الخارجية الواسعة'
      ],
      solutions: [
        'تقسيم المساحات إلى أجنحة مستقلة مع مناطق مشتركة فخمة',
        'استخدام عناصر معمارية تقليدية مع أنظمة ذكية متطورة',
        'تصميم أنظمة أمنية متقدمة بشكل غير مرئي',
        'تصميم حدائق متعددة المستويات مع نوافير ومسطحات خضراء'
      ],
      images: [
        'https://readdy.ai/api/search-image?query=Luxurious%20royal%20palace%20exterior%20with%20grand%20architecture%2C%20elegant%20columns%2C%20beautiful%20landscaping%2C%20professional%20photography%2C%20bright%20daylight%2C%20clean%20simple%20background&width=1920&height=1080&seq=project5img1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Royal%20palace%20grand%20entrance%20hall%20with%20luxurious%20marble%20floors%2C%20elegant%20chandeliers%2C%20high%20ceilings%2C%20professional%20photography%2C%20bright%20lighting%2C%20clean%20simple%20background&width=1920&height=1080&seq=project5img2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Luxurious%20palace%20living%20room%20with%20elegant%20furniture%2C%20ornate%20details%2C%20high-end%20finishes%2C%20professional%20photography%2C%20bright%20lighting%2C%20clean%20simple%20background&width=1920&height=1080&seq=project5img3&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Royal%20palace%20gardens%20with%20beautiful%20landscaping%2C%20fountains%2C%20elegant%20pathways%2C%20professional%20photography%2C%20bright%20daylight%2C%20clean%20simple%20background&width=1920&height=1080&seq=project5img4&orientation=landscape'
      ]
    },
    '6': {
      title: 'منزل عائلي كلاسيكي',
      category: 'مشروع سكني',
      location: 'المدينة المنورة، المملكة العربية السعودية',
      image: 'https://readdy.ai/api/search-image?query=Classic%20family%20house%20exterior%20with%20traditional%20architecture%2C%20elegant%20design%2C%20beautiful%20garden%2C%20professional%20photography%2C%20bright%20daylight%2C%20clean%20simple%20background&width=1920&height=1080&seq=project6hero&orientation=landscape',
      description: 'منزل عائلي بتصميم كلاسيكي يجمع بين الأصالة والراحة. تم تصميمه ليكون ملاذاً هادئاً للعائلة، مع مساحات خضراء جميلة ومناطق معيشة مريحة. التصميم يحترم الطابع المعماري التقليدي مع إضافة لمسات عصرية.',
      challenges: [
        'الحفاظ على الطابع الكلاسيكي مع توفير الراحة الحديثة',
        'دمج الحديقة مع التصميم المعماري',
        'توفير مساحات كافية للعائلة الممتدة',
        'اختيار مواد تقليدية بجودة عالية'
      ],
      solutions: [
        'استخدام عناصر معمارية كلاسيكية مع تجهيزات حديثة',
        'تصميم شرفات ومساحات انتقالية تربط الداخل بالخارج',
        'تخصيص أجنحة منفصلة مع مناطق تجمع مشتركة',
        'استخدام الحجر الطبيعي والخشب الفاخر'
      ],
      images: [
        'https://readdy.ai/api/search-image?query=Classic%20family%20house%20exterior%20with%20traditional%20architecture%2C%20elegant%20facade%2C%20beautiful%20garden%2C%20professional%20photography%2C%20bright%20daylight%2C%20clean%20simple%20background&width=1920&height=1080&seq=project6img1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Classic%20house%20interior%20living%20room%20with%20traditional%20furniture%2C%20elegant%20decor%2C%20warm%20atmosphere%2C%20professional%20photography%2C%20natural%20lighting%2C%20clean%20simple%20background&width=1920&height=1080&seq=project6img2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Classic%20house%20dining%20room%20with%20elegant%20furniture%2C%20traditional%20design%2C%20warm%20lighting%2C%20professional%20photography%2C%20clean%20simple%20background&width=1920&height=1080&seq=project6img3&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Classic%20house%20garden%20with%20beautiful%20landscaping%2C%20traditional%20elements%2C%20elegant%20pathways%2C%20professional%20photography%2C%20bright%20daylight%2C%20clean%20simple%20background&width=1920&height=1080&seq=project6img4&orientation=landscape'
      ]
    }
  };

  const allProjects = [
    {
      id: 1,
      title: 'فيلا سكنية فاخرة',
      category: 'مشروع سكني',
      location: 'الرياض، المملكة العربية السعودية',
      image: 'https://readdy.ai/api/search-image?query=Luxurious%20modern%20residential%20villa%20exterior%20with%20elegant%20architecture%2C%20beautiful%20landscaping%2C%20contemporary%20design%2C%20high-end%20finishes%2C%20Saudi%20Arabian%20style%2C%20professional%20photography%2C%20bright%20daylight%2C%20clean%20simple%20background&width=1920&height=1080&seq=project1hero&orientation=landscape'
    },
    {
      id: 2,
      title: 'شقة عصرية مودرن',
      category: 'مشروع سكني',
      location: 'جدة، المملكة العربية السعودية',
      image: 'https://readdy.ai/api/search-image?query=Modern%20contemporary%20apartment%20interior%20with%20stylish%20furniture%2C%20open%20space%20design%2C%20elegant%20decor%2C%20professional%20photography%2C%20bright%20natural%20lighting%2C%20clean%20simple%20background&width=1920&height=1080&seq=project2hero&orientation=landscape'
    },
    {
      id: 3,
      title: 'مركز تجاري متكامل',
      category: 'مشروع تجاري',
      location: 'الدمام، المملكة العربية السعودية',
      image: 'https://readdy.ai/api/search-image?query=Modern%20commercial%20center%20building%20exterior%20with%20glass%20facade%2C%20contemporary%20architecture%2C%20professional%20photography%2C%20bright%20daylight%2C%20clean%20simple%20background&width=1920&height=1080&seq=project3hero&orientation=landscape'
    },
    {
      id: 4,
      title: 'شقة عائلية دافئة',
      category: 'مشروع سكني',
      location: 'مكة المكرمة، المملكة العربية السعودية',
      image: 'https://readdy.ai/api/search-image?query=Warm%20cozy%20family%20apartment%20interior%20with%20comfortable%20furniture%2C%20welcoming%20atmosphere%2C%20contemporary%20design%2C%20professional%20photography%2C%20natural%20lighting%2C%20clean%20simple%20background&width=1920&height=1080&seq=project4hero&orientation=landscape'
    },
    {
      id: 5,
      title: 'قصر ملكي فخم',
      category: 'مشروع سكني',
      location: 'الرياض، المملكة العربية السعودية',
      image: 'https://readdy.ai/api/search-image?query=Luxurious%20royal%20palace%20exterior%20with%20grand%20architecture%2C%20elegant%20design%2C%20beautiful%20landscaping%2C%20professional%20photography%2C%20bright%20daylight%2C%20clean%20simple%20background&width=1920&height=1080&seq=project5hero&orientation=landscape'
    },
    {
      id: 6,
      title: 'منزل عائلي كلاسيكي',
      category: 'مشروع سكني',
      location: 'المدينة المنورة، المملكة العربية السعودية',
      image: 'https://readdy.ai/api/search-image?query=Classic%20family%20house%20exterior%20with%20traditional%20architecture%2C%20elegant%20design%2C%20beautiful%20garden%2C%20professional%20photography%2C%20bright%20daylight%2C%20clean%20simple%20background&width=1920&height=1080&seq=project6hero&orientation=landscape'
    }
  ];

  const project = projectsData[id] || projectsData['1'];

  return (
    <div className="min-h-screen bg-[#0A1F21]">
      <Header />
      <main>
        <ProjectDetailHero 
          title={project.title}
          category={project.category}
          location={project.location}
          image={project.image}
        />
        <ProjectInfo projectId={id} />
        <ProjectGallery images={project.images} />
        <ProjectDescription 
          description={project.description}
          challenges={project.challenges}
          solutions={project.solutions}
        />
        <RelatedProjects currentProjectId={parseInt(id)} projects={allProjects} />
        <ProjectCTA />
      </main>
      <Footer />
    </div>
  );
}
