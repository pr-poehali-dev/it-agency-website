import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'mobile';
  icon: string;
}

const technologies: Technology[] = [
  { name: 'React', category: 'frontend', icon: '⚛️' },
  { name: 'Vue.js', category: 'frontend', icon: '💚' },
  { name: 'Angular', category: 'frontend', icon: '🅰️' },
  { name: 'TypeScript', category: 'frontend', icon: '📘' },
  { name: 'Node.js', category: 'backend', icon: '🟢' },
  { name: 'Python', category: 'backend', icon: '🐍' },
  { name: 'PostgreSQL', category: 'backend', icon: '🐘' },
  { name: 'MongoDB', category: 'backend', icon: '🍃' },
  { name: 'Docker', category: 'devops', icon: '🐳' },
  { name: 'Kubernetes', category: 'devops', icon: '☸️' },
  { name: 'AWS', category: 'devops', icon: '☁️' },
  { name: 'CI/CD', category: 'devops', icon: '🔄' },
  { name: 'React Native', category: 'mobile', icon: '📱' },
  { name: 'Flutter', category: 'mobile', icon: '🦋' },
  { name: 'Swift', category: 'mobile', icon: '🍎' },
  { name: 'Kotlin', category: 'mobile', icon: '🤖' },
];

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Масштабируемая платформа для онлайн-торговли с микросервисной архитектурой',
    techs: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    image: '🛒',
  },
  {
    title: 'Mobile Banking App',
    description: 'Безопасное мобильное приложение для управления финансами',
    techs: ['React Native', 'Node.js', 'MongoDB', 'Kubernetes'],
    image: '💳',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time дашборд для визуализации бизнес-метрик',
    techs: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
    image: '📊',
  },
];

const services = [
  {
    icon: 'Code2',
    title: 'Веб-разработка',
    description: 'Создание современных веб-приложений с использованием передовых технологий',
  },
  {
    icon: 'Smartphone',
    title: 'Мобильные приложения',
    description: 'Разработка нативных и кроссплатформенных мобильных приложений',
  },
  {
    icon: 'Cloud',
    title: 'Облачные решения',
    description: 'Проектирование и внедрение масштабируемых облачных инфраструктур',
  },
  {
    icon: 'Shield',
    title: 'Безопасность',
    description: 'Комплексный аудит и защита ваших IT-систем',
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const filteredTechnologies = selectedCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Спасибо за обращение!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Code2" className="text-primary" size={28} />
            <span className="text-2xl font-bold">DevStudio</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#tech" className="hover:text-primary transition-colors">Технологии</a>
            <a href="#projects" className="hover:text-primary transition-colors">Проекты</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button>Связаться</Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6">
            <Badge variant="outline" className="text-lg px-4 py-2">
              🚀 Инновации в IT
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in">
            Превращаем идеи<br />в цифровые продукты
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Полный цикл разработки: от концепции до запуска и поддержки
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg">
              <Icon name="Rocket" className="mr-2" size={20} />
              Начать проект
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть демо
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему мы?</h2>
            <p className="text-xl text-muted-foreground">Наши преимущества и цели</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:scale-105 transition-transform">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Icon name="Zap" className="text-primary" size={24} />
                </div>
                <CardTitle>Скорость</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Быстрая разработка благодаря agile-методологии и опытной команде
                </p>
              </CardContent>
            </Card>
            <Card className="hover:scale-105 transition-transform">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                  <Icon name="Target" className="text-secondary" size={24} />
                </div>
                <CardTitle>Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Строгий контроль качества на каждом этапе разработки
                </p>
              </CardContent>
            </Card>
            <Card className="hover:scale-105 transition-transform">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                <CardTitle>Поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  24/7 техподдержка и сопровождение после запуска проекта
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр IT-решений</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:border-primary transition-all">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} className="text-background" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tech" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Технологический стек</h2>
            <p className="text-xl text-muted-foreground">Работаем с передовыми технологиями</p>
          </div>
          
          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <Button 
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
            >
              Все технологии
            </Button>
            <Button 
              variant={selectedCategory === 'frontend' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('frontend')}
            >
              Frontend
            </Button>
            <Button 
              variant={selectedCategory === 'backend' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('backend')}
            >
              Backend
            </Button>
            <Button 
              variant={selectedCategory === 'devops' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('devops')}
            >
              DevOps
            </Button>
            <Button 
              variant={selectedCategory === 'mobile' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('mobile')}
            >
              Mobile
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {filteredTechnologies.map((tech, index) => (
              <Card 
                key={index} 
                className="p-6 flex flex-col items-center justify-center gap-3 hover:scale-110 hover:border-primary transition-all cursor-pointer animate-fade-in"
              >
                <span className="text-4xl">{tech.icon}</span>
                <span className="text-sm font-semibold text-center">{tech.name}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши проекты</h2>
            <p className="text-xl text-muted-foreground">Портфолио выполненных работ</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl hover:shadow-primary/20 transition-all overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform">
                  {project.image}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech, i) => (
                      <Badge key={i} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">Расскажите о вашем проекте</p>
          </div>
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input 
                    id="name" 
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Code2" className="text-primary" size={32} />
            <span className="text-2xl font-bold">DevStudio</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Инновационные IT-решения для вашего бизнеса
          </p>
          <div className="flex gap-6 justify-center">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Github" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Linkedin" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Mail" size={24} />
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            © 2024 DevStudio. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
