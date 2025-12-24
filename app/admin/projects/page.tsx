'use client';
import { useState } from 'react';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  area: string;
  duration: string;
  image: string;
  services: string[];
  overview: string;
  challenges: string[];
  solutions: string[];
  gallery: string[];
}

export default function AdminProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('الكل');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [newGalleryImage, setNewGalleryImage] = useState('');

  const allServices = [
    'التصميم الداخلي',
    'التصميم الخارجي',
    'التشطيب',
    'توريد الأساس',
    'إدارة المشاريع',
    'نصائح من الخبراء',
    'التصميم المعماري',
    'الديكور والتنسيق',
    'الإضاءة الذكية',
    'الأثاث المخصص',
    'المطابخ الفاخرة',
    'الحمامات العصرية'
  ];

  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: 'فيلا سكنية فاخرة',
      category: 'مشروع سكني',
      location: 'الرياض، المملكة العربية السعودية',
      area: '450 م²',
      duration: '8 أشهر',
      image: 'https://readdy.ai/api/search-image?query=Luxurious%20modern%20residential%20villa%20exterior%20with%20elegant%20architecture%2C%20beautiful%20landscaping%2C%20contemporary%20design%2C%20high-end%20finishes%2C%20Saudi%20Arabian%20style%2C%20professional%20photography%2C%20bright%20daylight%2C%20clean%20simple%20background&width=800&height=600&seq=adminproject1&orientation=landscape',
      services: ['التصميم الداخلي', 'التصميم الخارجي', 'التشطيب'],
      overview: 'مشروع فيلا سكنية فاخرة يجمع بين الفخامة والراحة، تم تصميمها بأسلوب عصري يلبي احتياجات العائلة الحديثة. يتميز المشروع بمساحات واسعة ومفتوحة، مع اهتمام خاص بالتفاصيل الداخلية والخارجية.',
      challenges: [
        'التعامل مع المساحة الكبيرة وتوزيع الغرف بشكل مثالي',
        'دمج التصميم العصري مع الطابع التقليدي المحلي',
        'ضمان الخصوصية مع الحفاظ على الإضاءة الطبيعية'
      ],
      solutions: [
        'تصميم مخطط معماري ذكي يوفر مساحات متعددة الاستخدامات',
        'استخدام عناصر معمارية تقليدية بأسلوب عصري',
        'تصميم نوافذ استراتيجية مع استخدام الزجاج العاكس'
      ],
      gallery: [
        'https://readdy.ai/api/search-image?query=Luxurious%20villa%20exterior%20front%20view%20with%20elegant%20architecture&width=800&height=600&seq=gallery1a&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Modern%20luxury%20villa%20interior%20living%20room%20with%20elegant%20furniture&width=800&height=600&seq=gallery1b&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Luxury%20villa%20master%20bedroom%20interior%20with%20elegant%20design&width=800&height=600&seq=gallery1c&orientation=landscape'
      ]
    },
    {
      id: 2,
      title: 'مركز تجاري متكامل',
      category: 'مشروع تجاري',
      location: 'جدة، المملكة العربية السعودية',
      area: '800 م²',
      duration: '12 شهر',
      image: 'https://readdy.ai/api/search-image?query=Modern%20commercial%20center%20building%20exterior%20with%20glass%20facade%2C%20contemporary%20architecture%2C%20professional%20photography%2C%20bright%20daylight%2C%20clean%20simple%20background&width=800&height=600&seq=adminproject2&orientation=landscape',
      services: ['التصميم المعماري', 'إدارة المشاريع', 'التشطيب'],
      overview: 'مركز تجاري متكامل يضم مجموعة متنوعة من المحلات والمكاتب. تم تصميمه ليكون وجهة تجارية رائدة في المنطقة.',
      challenges: [
        'تصميم مساحات تجارية متنوعة تناسب احتياجات مختلفة',
        'ضمان سهولة الحركة والوصول لجميع الطوابق'
      ],
      solutions: [
        'تصميم وحدات تجارية مرنة قابلة للتخصيص',
        'استخدام مصاعد ومداخل متعددة مع لافتات واضحة'
      ],
      gallery: [
        'https://readdy.ai/api/search-image?query=Modern%20commercial%20center%20exterior%20with%20glass%20facade&width=800&height=600&seq=gallery2a&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Commercial%20center%20interior%20lobby%20with%20modern%20design&width=800&height=600&seq=gallery2b&orientation=landscape'
      ]
    }
  ]);

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    location: '',
    area: '',
    duration: '',
    image: '',
    services: [] as string[],
    overview: '',
    challenges: [''],
    solutions: [''],
    gallery: ['']
  });

  const categories = ['الكل', 'مشروع سكني', 'مشروع تجاري', 'مشروع إداري'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.includes(searchTerm) || 
                         project.location.includes(searchTerm);
    const matchesCategory = categoryFilter === 'الكل' || project.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleAddProject = () => {
    const newProject: Project = {
      id: projects.length + 1,
      ...formData,
      challenges: formData.challenges.filter(c => c.trim() !== ''),
      solutions: formData.solutions.filter(s => s.trim() !== ''),
      gallery: formData.gallery.filter(g => g.trim() !== '')
    };
    setProjects([...projects, newProject]);
    setShowAddModal(false);
    resetForm();
  };

  const handleEditProject = () => {
    if (selectedProject) {
      setProjects(projects.map(p => 
        p.id === selectedProject.id 
          ? { 
              ...selectedProject, 
              ...formData,
              challenges: formData.challenges.filter(c => c.trim() !== ''),
              solutions: formData.solutions.filter(s => s.trim() !== ''),
              gallery: formData.gallery.filter(g => g.trim() !== '')
            } 
          : p
      ));
      setShowEditModal(false);
      setSelectedProject(null);
      resetForm();
    }
  };

  const handleDeleteProject = () => {
    if (selectedProject) {
      setProjects(projects.filter(p => p.id !== selectedProject.id));
      setShowDeleteModal(false);
      setSelectedProject(null);
    }
  };

  const openEditModal = (project: Project) => {
    setSelectedProject(project);
    setFormData({
      title: project.title,
      category: project.category,
      location: project.location,
      area: project.area,
      duration: project.duration,
      image: project.image,
      services: project.services,
      overview: project.overview,
      challenges: project.challenges.length > 0 ? project.challenges : [''],
      solutions: project.solutions.length > 0 ? project.solutions : [''],
      gallery: project.gallery.length > 0 ? project.gallery : ['']
    });
    setShowEditModal(true);
  };

  const openGalleryModal = (project: Project) => {
    setSelectedProject(project);
    setFormData({
      ...formData,
      gallery: project.gallery.length > 0 ? project.gallery : ['']
    });
    setShowGalleryModal(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      category: '',
      location: '',
      area: '',
      duration: '',
      image: '',
      services: [],
      overview: '',
      challenges: [''],
      solutions: [''],
      gallery: ['']
    });
  };

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const addChallenge = () => {
    setFormData(prev => ({
      ...prev,
      challenges: [...prev.challenges, '']
    }));
  };

  const removeChallenge = (index: number) => {
    setFormData(prev => ({
      ...prev,
      challenges: prev.challenges.filter((_, i) => i !== index)
    }));
  };

  const updateChallenge = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      challenges: prev.challenges.map((c, i) => i === index ? value : c)
    }));
  };

  const addSolution = () => {
    setFormData(prev => ({
      ...prev,
      solutions: [...prev.solutions, '']
    }));
  };

  const removeSolution = (index: number) => {
    setFormData(prev => ({
      ...prev,
      solutions: prev.solutions.filter((_, i) => i !== index)
    }));
  };

  const updateSolution = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      solutions: prev.solutions.map((s, i) => i === index ? value : s)
    }));
  };

  const addGalleryImage = () => {
    setFormData(prev => ({
      ...prev,
      gallery: [...prev.gallery, '']
    }));
  };

  const removeGalleryImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      gallery: prev.gallery.filter((_, i) => i !== index)
    }));
  };

  const updateGalleryImage = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      gallery: prev.gallery.map((g, i) => i === index ? value : g)
    }));
  };

  const saveGallery = () => {
    if (selectedProject) {
      setProjects(projects.map(p => 
        p.id === selectedProject.id 
          ? { ...p, gallery: formData.gallery.filter(g => g.trim() !== '') }
          : p
      ));
      setShowGalleryModal(false);
      setSelectedProject(null);
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setSelectedProject(project);
    setFormData({
      title: project.title,
      category: project.category,
      location: project.location,
      area: project.area,
      duration: project.duration,
      image: project.image,
      services: project.services,
      overview: project.overview,
      challenges: project.challenges.length > 0 ? project.challenges : [''],
      solutions: project.solutions.length > 0 ? project.solutions : [''],
      gallery: project.gallery.length > 0 ? project.gallery : ['']
    });
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    if (confirm('هل أنت متأكد من حذف هذا المشروع؟')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const handleOpenGallery = (project: Project) => {
    setSelectedProject(project);
    setShowGalleryModal(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingProject) {
      setProjects(projects.map(p => 
        p.id === editingProject.id 
          ? { 
              ...editingProject, 
              ...formData,
              challenges: formData.challenges.filter(c => c.trim() !== ''),
              solutions: formData.solutions.filter(s => s.trim() !== ''),
              gallery: formData.gallery.filter(g => g.trim() !== '')
            } 
          : p
      ));
    } else {
      const newProject: Project = {
        id: projects.length + 1,
        ...formData,
        challenges: formData.challenges.filter(c => c.trim() !== ''),
        solutions: formData.solutions.filter(s => s.trim() !== ''),
        gallery: formData.gallery.filter(g => g.trim() !== '')
      };
      setProjects([...projects, newProject]);
    }
    
    setShowModal(false);
    setEditingProject(null);
    resetForm();
  };

  const handleAddGalleryImage = () => {
    if (newGalleryImage.trim() && selectedProject) {
      setProjects(projects.map(p => 
        p.id === selectedProject.id 
          ? { ...p, gallery: [...(p.gallery || []), newGalleryImage] }
          : p
      ));
      setSelectedProject({
        ...selectedProject,
        gallery: [...(selectedProject.gallery || []), newGalleryImage]
      });
      setNewGalleryImage('');
    }
  };

  const handleRemoveGalleryImage = (index: number) => {
    if (selectedProject) {
      const updatedGallery = selectedProject.gallery.filter((_, i) => i !== index);
      setProjects(projects.map(p => 
        p.id === selectedProject.id 
          ? { ...p, gallery: updatedGallery }
          : p
      ));
      setSelectedProject({
        ...selectedProject,
        gallery: updatedGallery
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001F3F] via-[#002855] to-[#003366]">
      <div className="w-full px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">إدارة المشاريع</h1>
            <p className="text-white/70">إدارة وتحديث مشاريع الشركة</p>
          </div>
          <Link href="/admin" className="flex items-center space-x-2 space-x-reverse text-white/80 hover:text-white transition-colors cursor-pointer">
            <i className="ri-arrow-right-line"></i>
            <span>العودة للوحة التحكم</span>
          </Link>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-[#FFA500]/20">
          <div className="bg-gradient-to-r from-[#001F3F] to-[#003366] px-8 py-6 border-b-4 border-[#FFA500]">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-12 h-12 bg-[#FFA500] rounded-xl flex items-center justify-center">
                  <i className="ri-building-line text-white text-2xl"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">المشاريع</h2>
                  <p className="text-white/70 text-sm">إجمالي المشاريع: {projects.length}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setEditingProject(null);
                  setFormData({
                    title: '',
                    category: '',
                    location: '',
                    area: '',
                    duration: '',
                    image: '',
                    services: [],
                    overview: '',
                    challenges: [''],
                    solutions: [''],
                    gallery: ['']
                  });
                  setShowModal(true);
                }}
                className="bg-[#FFA500] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#FFA500]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#FFA500]/30 cursor-pointer whitespace-nowrap"
              >
                <span className="flex items-center space-x-2 space-x-reverse">
                  <i className="ri-add-line text-xl"></i>
                  <span>إضافة مشروع جديد</span>
                </span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#001F3F]/10 to-[#003366]/10 border-b-2 border-[#FFA500]/30">
                  <th className="px-6 py-4 text-right text-sm font-bold text-[#001F3F] uppercase tracking-wider">الصورة</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-[#001F3F] uppercase tracking-wider">اسم المشروع</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-[#001F3F] uppercase tracking-wider">الفئة</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-[#001F3F] uppercase tracking-wider">الموقع</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-[#001F3F] uppercase tracking-wider">المدة</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-[#001F3F] uppercase tracking-wider">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {projects.map((project) => (
                  <tr key={project.id} className="hover:bg-[#001F3F]/5 transition-colors">
                    <td className="px-6 py-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-20 h-20 object-cover rounded-xl shadow-md border-2 border-[#FFA500]/20"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-[#001F3F]">{project.title}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#001F3F]/10 text-[#001F3F] border border-[#001F3F]/20">
                        {project.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{project.location}</td>
                    <td className="px-6 py-4 text-gray-700">{project.duration}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center space-x-4 space-x-reverse">
                        <button
                          onClick={() => handleEdit(project)}
                          className="w-9 h-9 bg-[#001F3F] text-white rounded-lg hover:bg-[#003366] transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center"
                          title="تعديل"
                        >
                          <i className="ri-edit-line text-base"></i>
                        </button>
                        <button
                          onClick={() => handleOpenGallery(project)}
                          className="w-9 h-9 bg-[#FFA500] text-white rounded-lg hover:bg-[#FFA500]/90 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center"
                          title="معرض الأعمال"
                        >
                          <i className="ri-image-line text-base"></i>
                        </button>
                        <button
                          onClick={() => handleDelete(project.id)}
                          className="w-9 h-9 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center"
                          title="حذف"
                        >
                          <i className="ri-delete-bin-line text-base"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-[#001F3F] to-[#003366] px-8 py-6 border-b-4 border-[#FFA500] sticky top-0 z-10">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">
                  {editingProject ? 'تعديل المشروع' : 'إضافة مشروع جديد'}
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 cursor-pointer flex items-center justify-center"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#001F3F] font-semibold mb-2">اسم المشروع</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFA500] focus:ring-2 focus:ring-[#FFA500]/20 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#001F3F] font-semibold mb-2">الفئة</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFA500] focus:ring-2 focus:ring-[#FFA500]/20 outline-none transition-all pr-8"
                    required
                  >
                    <option value="">اختر الفئة</option>
                    <option value="مشروع سكني">مشروع سكني</option>
                    <option value="مشروع تجاري">مشروع تجاري</option>
                    <option value="مشروع إداري">مشروع إداري</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#001F3F] font-semibold mb-2">الموقع</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFA500] focus:ring-2 focus:ring-[#FFA500]/20 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#001F3F] font-semibold mb-2">المساحة</label>
                  <input
                    type="text"
                    value={formData.area}
                    onChange={(e) => setFormData({...formData, area: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFA500] focus:ring-2 focus:ring-[#FFA500]/20 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#001F3F] font-semibold mb-2">المدة</label>
                  <input
                    type="text"
                    value={formData.duration}
                    onChange={(e) => setFormData({...formData, duration: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFA500] focus:ring-2 focus:ring-[#FFA500]/20 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#001F3F] font-semibold mb-2">رابط الصورة الرئيسية</label>
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFA500] focus:ring-2 focus:ring-[#FFA500]/20 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#001F3F] font-semibold mb-3">
                  الخدمات ({formData.services.length} محددة)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {allServices.map((service) => (
                    <label
                      key={service}
                      className="flex items-center space-x-2 space-x-reverse p-3 border-2 border-gray-200 rounded-xl hover:border-[#FFA500] transition-all cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => toggleService(service)}
                        className="w-5 h-5 text-[#FFA500] border-gray-300 rounded focus:ring-[#FFA500] cursor-pointer"
                      />
                      <span className="text-sm text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[#001F3F] font-semibold mb-2">
                  نبذة عن المشروع ({formData.overview.length}/500)
                </label>
                <textarea
                  value={formData.overview}
                  onChange={(e) => setFormData({...formData, overview: e.target.value.slice(0, 500)})}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFA500] focus:ring-2 focus:ring-[#FFA500]/20 outline-none transition-all resize-none"
                  placeholder="وصف شامل عن المشروع..."
                  required
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-[#001F3F] font-semibold">التحديات</label>
                  <button
                    type="button"
                    onClick={addChallenge}
                    className="px-4 py-2 bg-[#FFA500] text-white rounded-lg text-sm font-semibold hover:bg-[#FFA500]/90 transition-all cursor-pointer whitespace-nowrap"
                  >
                    <span className="flex items-center space-x-1 space-x-reverse">
                      <i className="ri-add-line"></i>
                      <span>إضافة تحدي</span>
                    </span>
                  </button>
                </div>
                <div className="space-y-3">
                  {formData.challenges.map((challenge, index) => (
                    <div key={index} className="flex space-x-2 space-x-reverse">
                      <input
                        type="text"
                        value={challenge}
                        onChange={(e) => updateChallenge(index, e.target.value)}
                        className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFA500] focus:ring-2 focus:ring-[#FFA500]/20 outline-none transition-all"
                        placeholder={`التحدي ${index + 1}`}
                      />
                      {formData.challenges.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeChallenge(index)}
                          className="w-11 h-11 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all cursor-pointer flex items-center justify-center"
                        >
                          <i className="ri-delete-bin-line"></i>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-[#001F3F] font-semibold">الحلول</label>
                  <button
                    type="button"
                    onClick={addSolution}
                    className="px-4 py-2 bg-[#FFA500] text-white rounded-lg text-sm font-semibold hover:bg-[#FFA500]/90 transition-all cursor-pointer whitespace-nowrap"
                  >
                    <span className="flex items-center space-x-1 space-x-reverse">
                      <i className="ri-add-line"></i>
                      <span>إضافة حل</span>
                    </span>
                  </button>
                </div>
                <div className="space-y-3">
                  {formData.solutions.map((solution, index) => (
                    <div key={index} className="flex space-x-2 space-x-reverse">
                      <input
                        type="text"
                        value={solution}
                        onChange={(e) => updateSolution(index, e.target.value)}
                        className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFA500] focus:ring-2 focus:ring-[#FFA500]/20 outline-none transition-all"
                        placeholder={`الحل ${index + 1}`}
                      />
                      {formData.solutions.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeSolution(index)}
                          className="w-11 h-11 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all cursor-pointer flex items-center justify-center"
                        >
                          <i className="ri-delete-bin-line"></i>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end space-x-4 space-x-reverse pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-[#001F3F] to-[#003366] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#001F3F]/30 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
                >
                  <span className="flex items-center space-x-2 space-x-reverse">
                    <i className="ri-save-line"></i>
                    <span>{editingProject ? 'حفظ التعديلات' : 'إضافة المشروع'}</span>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showGalleryModal && selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-[#FFA500] to-[#FF8C00] px-8 py-6 border-b-4 border-[#001F3F] sticky top-0 z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">معرض أعمال المشروع</h3>
                  <p className="text-white/80 text-sm mt-1">{selectedProject.title}</p>
                </div>
                <button
                  onClick={() => {
                    setShowGalleryModal(false);
                    setSelectedProject(null);
                  }}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 cursor-pointer flex items-center justify-center"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-6">
                <label className="block text-[#001F3F] font-semibold mb-3">إضافة صورة جديدة</label>
                <div className="flex space-x-3 space-x-reverse">
                  <input
                    type="text"
                    value={newGalleryImage}
                    onChange={(e) => setNewGalleryImage(e.target.value)}
                    placeholder="رابط الصورة"
                    className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFA500] focus:ring-2 focus:ring-[#FFA500]/20 outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={handleAddGalleryImage}
                    className="px-6 py-3 bg-gradient-to-r from-[#FFA500] to-[#FF8C00] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#FFA500]/30 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
                  >
                    <span className="flex items-center space-x-2 space-x-reverse">
                      <i className="ri-add-line"></i>
                      <span>إضافة</span>
                    </span>
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-[#001F3F]">الصور الحالية</h4>
                  <span className="px-4 py-2 bg-[#FFA500]/10 text-[#FFA500] rounded-lg font-semibold border border-[#FFA500]/30">
                    {selectedProject.gallery?.length || 0} صورة
                  </span>
                </div>
                
                {selectedProject.gallery && selectedProject.gallery.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedProject.gallery.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={image}
                          alt={`صورة ${index + 1}`}
                          className="w-full h-48 object-cover rounded-xl shadow-md border-2 border-[#FFA500]/20"
                        />
                        <button
                          onClick={() => handleRemoveGalleryImage(index)}
                          className="absolute top-2 left-2 w-8 h-8 bg-red-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer flex items-center justify-center"
                        >
                          <i className="ri-delete-bin-line text-sm"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                    <i className="ri-image-line text-5xl text-gray-300 mb-3"></i>
                    <p className="text-gray-400">لا توجد صور في المعرض</p>
                  </div>
                )}
              </div>

              <div className="flex justify-end pt-6 border-t border-gray-200">
                <button
                  onClick={() => {
                    setShowGalleryModal(false);
                    setSelectedProject(null);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-[#001F3F] to-[#003366] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#001F3F]/30 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
