import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  Zap,
  Brain,
  Target,
  Star,
  CheckCircle,
  User,
  MessageCircle,
  Award,
  TrendingUp,
} from "lucide-react";
import logo from "./assets/imgs/logomentoria.jpg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import mentora from "./assets/imgs/mentora.jpg";
import { CiStar } from "react-icons/ci";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://mentoria360.aiatende.dev.br/julianaleite/v1/api/register",
        {
        
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log(response);
      if (response.ok) {
        alert(
          "Inscrição realizada com sucesso! Você receberá mais informações em breve."
        );
      } else {
        alert("Houve um erro ao enviar o formulário.");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar o formulário. Tente novamente mais tarde.");
    }
  };

  const learningTopics = [
    {
      icon: <IoMdCheckmarkCircleOutline className="w-8 h-8 text-green-600" />,
      text: "Como usar IA para responder leads 24/7",
      subtext:
        "Nunca mais perca um paciente por falta de atendimento fora do horário comercial.",
    },
    {
      icon: <IoMdCheckmarkCircleOutline className="w-8 h-8 text-green-600" />,
      text: "Estratégias de captação de pacientes sem gastar mais em anúncios",
      subtext: "Maximize o ROI dos seus investimentos em marketing digital.",
    },
    {
      icon: <IoMdCheckmarkCircleOutline className="w-8 h-8 text-green-600" />,
      text: "Fluxos de automação que reduzem faltas em até 38%",
      subtext: "Técnicas comprovadas para diminuir drasticamente o no-show.",
    },
    {
      icon: <IoMdCheckmarkCircleOutline className="w-8 h-8 text-green-600" />,
      text: "Princípios de Odontologia Digital para modernizar seus tratamentos e protocolos",
      subtext: "Integre tecnologia avançada em seus procedimentos clínicos.",
    },
    {
      icon: <IoMdCheckmarkCircleOutline className="w-8 h-8 text-green-600" />,
      text: "Experiência do Cliente completa: do primeiro atendimento na recepção até a consulta inicial",
      subtext: "Crie uma jornada perfeita para seus pacientes.",
    },
    {
      icon: <IoMdCheckmarkCircleOutline className="w-8 h-8 text-green-600" />,
      text: "Técnicas de atendimento na recepção que encantam e fidelizam pacientes",
      subtext: "Transforme o primeiro contato em uma experiência memorável.",
    },
    {
      icon: <IoMdCheckmarkCircleOutline className="w-8 h-8 text-green-600" />,
      text: "Estratégias aplicadas na consulta inicial para maximizar conversões",
      subtext: "Aumente significativamente a aprovação de tratamentos.",
    },
    {
      icon: <IoMdCheckmarkCircleOutline className="w-8 h-8 text-green-600" />,
      text: "Cases práticos da Mentoria Atende 360",
      subtext: "Exemplos reais de clínicas que transformaram seus resultados.",
    },
  ];

  const vipBenefits = [
    "Materiais e Templates Exclusivos antes da reunião",
    "Perguntas e Respostas Diretas com a mentora",
    "Networking com outros dentistas e gestores de sucesso",
  ];

  const mentorResults = [
    "Pioneira em IA odontológica na região",
    "38% de redução de faltas em sua clínica",
    "27% de aumento de conversões na primeira consulta",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-red-100 border border-red-300 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-red-600 mr-2" />
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wide">
                Vagas Limitadas: Apenas 100 Participantes!
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Descubra como <span className="text-blue-600">Triplicar</span>{" "}
              Seus
              <br /> Agendamentos em Clínicas
              <br /> Odontológicas
              <br />
              <span className="text-3xl md:text-2xl text-gray-500">
                Com IA e Automação no Zoom
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Triplique Seus Agendamentos em Clínicas Odontológicas com
              <span className="font-semibold text-blue-600">
                {" "}
                IA e Automação
              </span>{" "}
              sem a necessidade de grandes equipes
            </p>

            <div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-3">
                <Calendar className="w-6 h-6 text-yellow-600 mr-2" />
                <h3 className="text-xl font-bold text-yellow-800">
                  Reunião Secreta no Zoom
                </h3>
              </div>
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-5 h-5 text-yellow-600 mr-2" />
                <span className="text-lg font-semibold text-yellow-800">
                  15 de Julho de 2025, às 20h
                </span>
              </div>
              <p className="text-yellow-700 font-medium"></p>
            </div>
          </div>

          {/* Registration Form */}
          <div className=" w-auto mx-auto bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="logo flex flex-col md:flex-row align-center items-center justify-center mb-10">
              <img src={logo} alt="" className="h-20" />
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-6">
                Mentoria Atende 360: Domine <br /> Agendamentos Automáticos
              </h3>
            </div>
            <div className="text p-10 mt-[-80px]">
              <h4 className="text-center text-gray-600">
                Inscreva-se agora para garantir sua vaga!
              </h4>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Seu Nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  E-mail Profissional *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="seuemail@exemplo.com"
                />
              </div>

              <div>
                <label
                  htmlFor="whatsapp"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg text-lg"
              >
                🚀 Quero Participar do Grupo VIP
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              * Campos obrigatórios. Seus dados estão seguros conosco.
            </p>
          </div>
        </div>
      </div>

      {/* Learning Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que você vai aprender na reunião secreta?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {learningTopics.map((topic, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="flex-shrink-0 bg-white rounded-lg p-2 shadow-sm">
                  {topic.icon}
                </div>
                <div className="texts">
                  <p className="text-black font-bold text-[17px] leading-relaxed">
                    {topic.text}
                  </p>
                  <p className="text-gray-700 text-[16px] leading-relaxed">
                    {topic.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="info text-center text-gray-900 font-bold text-[20px]">
            <p>São 60 minutos de conteúdo prático, direto ao ponto.</p>
            <p>
              <span className="text-red-600 font-semibold">
                Vagas limitadas!
              </span>
            </p>
            <div className="btn">
              <button className="mt-[10px] bg-gradient-to-r from-green-700 to-green-700 text-white font-bold py-4 px-6 rounded-lg hover:from-green-800 hover:to-green-800 transform hover:scale-105 transition-all duration-200 shadow-lg text-lg">
                ✅ Garantir Minha Vaga Agora!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* VIP Benefits Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Benefícios Exclusivos para Quem se Inscreve Agora!
          </h2>
          <div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-4 mb-8 max-w-md mx-auto">
            <p className="text-xl font-bold text-yellow-800">
              🎯 Convite para o Grupo VIP no WhatsApp
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {vipBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
          <div className="btn flex align-center justify-center items-center">
            <button className="flex align-center justify-center items-center mt-[30px] bg-gradient-to-r from-green-500 to-green-500 text-white font-bold py-4 px-6 rounded-lg hover:from-green-800 hover:to-green-800 transform hover:scale-105 transition-all duration-200 shadow-lg text-lg">
              <FaWhatsapp className="mr-[15px] h-[30px]" /> Quero o convite ao
              grupo WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Mentor Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Quem é a Mentora?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <div className="h-[250px] w-[250px] rounded-full bg-cover bg-blue-200 flex items-center justify-center">
                    <img
                      src={mentora}
                      alt=""
                      className="rounded-full w-[250px] h-[250px]  object-cover object-top"
                    />
                  </div>
                </div>

                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Mentora Dra. Juliana Leite
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold mb-4">
                    Cirurgiã-Dentista e Especialista em Automação
                  </p>

                  <div className="space-y-2 mb-6">
                    {mentorResults.map((result, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center md:justify-start"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 bg-gray-50  p-8 border-l-4 border-blue-600">
                    <div>
                      <blockquote className="text-lg italic text-gray-700 mb-3">
                        "Na minha prática, automatizei 100% do processo de
                        agendamento. Agora, compartilho tudo com você!"
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-10 md:p-10 mt-[50px]">
              <div className="flex items-center justify-center">
                <div className="flex-shrink-0"></div>
                <div>
                  <div className="star flex align-center justify-center ">
                    <CiStar className="bg-yellow-400" />
                  </div>
                  <blockquote className="text-lg text-center text-[2px] italic text-gray-700 mb-3">
                    "Em apenas uma semana aplicando as técnicas da Mentoria
                    <br /> Atende 360, já vi minha agenda lotar!"
                  </blockquote>
                  <cite className="text-blue-600 font-semibold text-center justify-center text-[20px]">
                    – Dra. Maria Silva, Clínica Sorriso Digital
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Final CTA Section */}
      <div className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ⚠️ Últimas Vagas Disponíveis!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Não perca esta oportunidade única de transformar sua clínica
            odontológica. As vagas são limitadas e podem esgotar a qualquer
            momento.
          </p>

          <button
            onClick={() =>
              document
                .querySelector("form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-white text-red-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg text-lg"
          >
            🚀 Quero Participar do Grupo VIP
          </button>

          <p className="text-red-100 mt-4 text-sm">
            * Inscrições podem ser encerradas sem aviso prévio
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Mentoria Atende 360</h3>
            <div className="flex flex-wrap justify-center space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Suporte
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              © 2025 Mentoria Atende 360. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
