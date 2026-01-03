
import React from 'react';
import { Shield, Sparkles, UserCheck, Heart, Clock, CheckCircle } from 'lucide-react';

export const EXPERT_NAME = "Luiza Oliveira";
export const EXPERT_TITLE = "Especialista em Harmonização Facial e Cirurgiã Dentista";
export const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5583998225253&text=Oi!%20Eu%20quero%20a%20pele%20dos%20meus%20sonhos%20%F0%9F%A4%A9%F0%9F%98%8D";
export const INSTAGRAM_LINK = "https://www.instagram.com/draluizacarla/";

export const IMAGES = {
  logo: "https://i.imgur.com/qMTZ21m.png",
  main: "https://i.imgur.com/7DkhQnc.png",
  secondary: "https://i.imgur.com/Hy61Zvx.png",
  tertiary: "https://i.imgur.com/Hy61Zvx.png",
  about: "https://i.imgur.com/u15T9Iv.png",
  results: [
    "https://i.imgur.com/Kg7WDho.png",
    "https://i.imgur.com/SvE326q.png",
    "https://i.imgur.com/KDYotAI.png",
    "https://i.imgur.com/uB5x6ve.png",
    "https://i.imgur.com/yba4VGt.png",
    "https://i.imgur.com/dEtifyp.png",
    "https://i.imgur.com/KAma8Kj.png",
    "https://i.imgur.com/GmqEyIa.png",
    "https://i.imgur.com/4PadyZQ.png",
    "https://i.imgur.com/vmlHFmE.png",
    "https://i.imgur.com/3tZGfsQ.png",
    "https://i.imgur.com/QueKwxO.png",
    "https://i.imgur.com/NQYFrGi.png",
    "https://i.imgur.com/3Cx1cm1.png",
    "https://i.imgur.com/PZCFbKZ.png",
    "https://i.imgur.com/tMONEGa.png",
    "https://i.imgur.com/Hb2MyrA.png",
    "https://i.imgur.com/0XhQhGA.png",
    "https://i.imgur.com/hH3kaq9.png",
    "https://i.imgur.com/WODLrD1.png"
  ],
  extra: [
    "https://i.imgur.com/hTQR8tt.png",
    "https://i.imgur.com/bCpKrAK.png",
    "https://i.imgur.com/FQyf6b4.png",
    "https://i.imgur.com/6tvAV4g.png",
    "https://i.imgur.com/iBPBQdV.png",
    "https://i.imgur.com/md13TMf.png",
    "https://i.imgur.com/gSn1fLB.png"
  ]
};

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    text: "O que mais te incomoda hoje ao se olhar no espelho?",
    options: ["Linhas de expressão", "Falta de volume", "Cansaço no olhar", "Flacidez"]
  },
  {
    id: 2,
    text: "Você já realizou algum procedimento estético injetável?",
    options: ["Sim, e amei", "Sim, mas não gostei", "Nunca realizei", "Tenho medo de agulhas"]
  },
  {
    id: 3,
    text: "Qual o seu maior medo em relação a procedimentos no rosto?",
    options: ["Ficar artificial", "Sentir dor", "Não ver resultado", "Gastar e não gostar"]
  },
  {
    id: 4,
    text: "Em quanto tempo você gostaria de ver sua pele transformada?",
    options: ["O mais rápido possível", "Para um evento em breve", "Estou apenas planejando", "Quero manutenção constante"]
  }
];

export const WHY_TRUST = [
  {
    title: "Avaliação Honestíssima",
    desc: "Eu não vendo procedimentos, eu entrego o que você realmente precisa.",
    icon: <Shield className="w-8 h-8 text-[#d4af37]" />
  },
  {
    title: "Atendimento Exclusivo",
    desc: "Você é atendida diretamente por mim, do início ao fim do processo.",
    icon: <UserCheck className="w-8 h-8 text-[#d4af37]" />
  },
  {
    title: "Naturalidade Absoluta",
    desc: "O foco é realçar sua beleza sem mudar quem você é.",
    icon: <Sparkles className="w-8 h-8 text-[#d4af37]" />
  },
  {
    title: "Segurança Total",
    desc: "Protocolos rigorosos e materiais de altíssima qualidade.",
    icon: <Heart className="w-8 h-8 text-[#d4af37]" />
  }
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Triagem Personalizada",
    desc: "Alinhamos suas expectativas e desejos via WhatsApp."
  },
  {
    step: "02",
    title: "Consulta Estratégica",
    desc: "Mapeamento facial completo para definir o plano perfeito."
  },
  {
    step: "03",
    title: "Sua Transformação",
    desc: "Execução do protocolo com técnica, arte e segurança."
  }
];
