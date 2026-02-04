import koreaUnivLogo from '../assets/koreauniv.png';
import onbitLogo from '../assets/onbit.jpg';
import kaistLogo from '../assets/kaist.jpg';
import sktLogo from '../assets/skt.jpg';
import usArmyLogo from '../assets/usarmy.jpg';
import aikuLogo from '../assets/aiku.webp';
import kwebLogo from '../assets/kweb.png';
import uclipImg from '../assets/uclip.png';

export const cvData = {
    profile: {
        name: {
            en: "Seunggi Moon",
            ko: "문승기"
        },
        title: {
            en: "Computer Science Undergrad @ Korea University",
            ko: "고려대학교 컴퓨터학과 재학생"
        },
        location: {
            en: "Seoul, South Korea",
            ko: "대한민국 서울"
        },
        email: "moon44432@korea.ac.kr",
        github: "https://github.com/moon44432",
        linkedin: "https://www.linkedin.com/in/seunggi-moon",
        scholar: "https://scholar.google.com/citations?user=1D5nttAAAAAJ",
        cv: "https://github.com/moon44432/moon44432/blob/main/moon-cv-eng.pdf",
        intro: {
            en: "I am a B.S. student at Korea University majoring in Computer Science and Engineering. My research interests include Generative Models (Image, Video, Audio, Diffusion), LLM/VLM Agents, and On-Device AI Optimization.",
            ko: "고려대학교 컴퓨터학과 재학 중입니다. 생성형 모델(이미지·비디오·오디오·디퓨전), LLM/VLM 에이전트, 온디바이스 AI 최적화 연구에 주력하고 있습니다."
        }
    },
    education: [
        {
            institution: {
                en: "Korea University",
                ko: "고려대학교"
            },
            degree: {
                en: "B.S. in Computer Science and Engineering",
                ko: "컴퓨터학과 학사"
            },
            period: "Mar. 2020 – Aug. 2026",
            location: {
                en: "Seoul",
                ko: "서울"
            },
            details: {
                en: [
                    "GPA: 4.29/4.5 (Cumulative)",
                    "Relevant Courses: Data Structures, Algorithms, Computer Architecture, Deep Learning"
                ],
                ko: [
                    "학점 평균: 4.29/4.5",
                    "주요 교과목: 자료구조, 알고리즘, 컴퓨터구조, 딥러닝"
                ]
            },
            logo: koreaUnivLogo
        }
    ],
    experience: [
        {
            company: {
                en: "ONBIT_LAB",
            },
            position: {
                en: "CTO & Co-Founder",
                ko: "CTO 및 공동 창업자"
            },
            period: "Feb. 2025 – Present",
            location: {
                en: "Seoul",
                ko: "서울"
            },
            description: {
                en: [
                    "Developing healthcare devices equipped with on-device AI.",
                    "Focusing on lightweighting and optimization of Deep Learning models for embedded devices."
                ],
                ko: [
                    "온디바이스 AI 기반 헬스케어 기기 개발",
                    "임베디드 기기용 딥러닝 모델 경량화 및 최적화 주도"
                ]
            },
            logo: onbitLogo
        },
        {
            company: {
                en: "KAIST AI Research Internship (KAIRI)",
                ko: "KAIST AI 학부연구생 (KAIRI)"
            },
            position: {
                en: "Research Intern",
                ko: "연구 인턴"
            },
            period: "Dec. 2024 – Jun. 2025",
            location: {
                en: "Seongnam",
                ko: "성남"
            },
            description: {
                en: [
                    "Proposed a Diffusion-based model architecture for solving Zero-shot Head Swapping tasks."
                ],
                ko: [
                    "Diffusion 기반 Zero-shot Head Swapping 모델 구조 제안"
                ]
            },
            logo: kaistLogo
        },
        {
            company: {
                en: "SKT AI Fellowship",
                ko: "SKT AI 펠로우십"
            },
            position: {
                en: "Research Fellow",
                ko: "연구 펠로우"
            },
            period: "May 2024 – Oct. 2024",
            location: {
                en: "Seoul",
                ko: "서울"
            },
            description: {
                en: [
                    "Research on 3D Object Insertion in Video for virtual product placement.",
                    "Developed an automated pipeline implementing camera parameter inference and 3D synthesis."
                ],
                ko: [
                    "가상 PPL을 위한 비디오 내 3D 객체 삽입 연구 수행",
                    "카메라 파라미터 추론 및 3D 합성 자동화 파이프라인 개발"
                ]
            },
            logo: sktLogo
        },
        {
            company: {
                en: "U.S. Army / Republic of Korea Army",
                ko: "미 육군 / 대한민국 육군"
            },
            position: {
                en: "KATUSA Sergeant",
                ko: "병장 (카투사)"
            },
            period: "Jun. 2021 – Dec. 2022",
            location: {
                en: "USAG Daegu",
                ko: "대구"
            },
            description: {
                en: [
                    "Served 18 months of mandatory military service in Public Affairs.",
                    "Contributed to cooperation between ROK/U.S. military and local community."
                ],
                ko: [
                    "공보병으로 18개월 복무",
                    "한미 장병과 지역 사회 간 협력 지원"
                ]
            },
            logo: usArmyLogo
        }
    ],
    activities: [
        {
            organization: {
                en: "AIKU (Artificial Intelligence Society in Korea University)",
                ko: "AIKU (고려대학교 인공지능 학회)"
            },
            role: {
                en: "Senior Member",
                ko: "정회원"
            },
            period: "Jan. 2024 – Present",
            location: {
                en: "Seoul",
                ko: "서울"
            },
            description: {
                en: [
                    "Led multiple paper review sessions and technical seminars.",
                    "Conducted collaborative projects on Human Pose Estimation and Reinforcement Learning."
                ],
                ko: [
                    "논문 리뷰 세션 및 기술 세미나 다수 주도",
                    "Human Pose Estimation 및 강화학습 협업 프로젝트 수행"
                ]
            },
            logo: aikuLogo
        },
        {
            organization: {
                en: "KWEB (Korea University Web Masters)",
                ko: "KWEB (고려대학교 웹 개발 학회)"
            },
            role: {
                en: "Junior Member",
                ko: "준회원"
            },
            period: "Mar. 2023 – Dec. 2023",
            location: {
                en: "Seoul",
                ko: "서울"
            },
            description: {
                en: [
                    "Completed introductory course in full-stack web development."
                ],
                ko: [
                    "풀스택 웹 개발 입문 과정 수료"
                ]
            },
            logo: kwebLogo
        }
    ],
    awards: [
        {
            title: {
                en: "8th D-TECH Challenge (Accelerating Track)",
                ko: "제8회 디테크(D-TECH) 공모전 (액셀러레이팅 트랙)"
            },
            result: {
                en: "3rd Place",
                ko: "3위 (우수상)"
            },
            period: "Nov. 2025",
            description: {
                en: "Participated as ONBIT_LAB team, proposed a smart assistive device for hearing and visual impairments using on-device AI.",
                ko: "온빛연구소 팀으로 참가, 온디바이스 AI 기반 시청각 장애인용 스마트 보조기기 제안 및 설계"
            }
        },
        {
            title: {
                en: "Chungbuk National University Innovative Startup League",
                ko: "충북대학교 혁신창업 리그"
            },
            result: {
                en: "1st Place",
                ko: "1위 (최우수상)"
            },
            period: "Sep. 2025",
            description: {
                en: "Proposed a smart assistive device for hearing and visual impairments using on-device AI.",
                ko: "온디바이스 AI 기반 시청각 장애인용 스마트 보조기기 제안 및 설계"
            }
        },
        {
            title: {
                en: "Korea University College of Informatics Datathon",
                ko: "고려대학교 정보대학 데이터톤"
            },
            result: {
                en: "1st Place",
                ko: "1위 (대상)"
            },
            period: "Nov. 2024",
            description: {
                en: "Led research on enhancing image captioning performance of Vision-Language Models.",
                ko: "VLM 이미지 캡셔닝 성능 향상 연구 주도"
            }
        },
        {
            title: {
                en: "Seoul Metropolitan City AIoT Hackathon",
                ko: "서울시 AIoT 해커톤"
            },
            result: {
                en: "2nd Place (Seoul Mayor's Award)",
                ko: "2위 (서울시장상)"
            },
            period: "Nov. 2023",
            description: {
                en: "Led development of an automated waste collection robot with real-time server communication.",
                ko: "실시간 통신 기반 자율주행 쓰레기 수거 로봇 설계 및 제작"
            }
        },
        {
            title: {
                en: "Korea University College of Informatics Hackathon",
                ko: "고려대학교 정보대학 해커톤"
            },
            result: {
                en: "4th Place",
                ko: "4위 (장려상)"
            },
            period: "Nov. 2023",
            description: {
                en: "Designed and developed an online community platform for informatics students and alumni.",
                ko: "정보대학 학생 및 동문을 위한 온라인 커뮤니티 플랫폼 개발"
            }
        },
        {
            title: {
                en: "Korea Olympiad in Informatics (KOI)",
                ko: "한국정보올림피아드(KOI)"
            },
            result: {
                en: "Encouragement Award",
                ko: "장려상"
            },
            period: "Jul. 2015",
            description: {
                en: "Participated in the Middle School Division.",
                ko: "중등부 부문"
            }
        }
    ],
    publications: [
        {
            title: "uCLIP: Parameter-Efficient Multilingual Extension of Vision-Language Models with Unpaired Data",
            authors: "Dahyun Chung*, Donghyun Shin*, Yujin Sung*, Seunggi Moon*, Jinwoo Jeon, Byung-Jun Lee†",
            venue: "AAAI-26",
            year: "2025",
            paperUrl: "https://arxiv.org/abs/2511.13036",
            githubUrl: "https://dinyudin203.github.io/uCLIP-project/",
            image: uclipImg
        },
        {
            title: "Co-Stimuli-Driven 2D WSe2 Optoelectronic Synapses for Neuromorphic Computing",
            authors: "Junho Sung, Sun Woo Kim, Donghwa Lee, Seunggi Moon, Eunho Lee†, Hyun Ho Kim†",
            venue: "Small",
            year: "2025",
            paperUrl: "https://doi.org/10.1002/smll.202504024",
            githubUrl: "",
            image: ""
        }
    ],
    skills: {
        languages: [
            {
                name: { en: "English", ko: "영어" },
                level: {
                    en: ["Professional Working Proficiency", "TOEIC 960, TEPS 519"],
                    ko: ["업무 소통 가능", "TOEIC 960, TEPS 519"]
                }
            },
            {
                name: { en: "Korean", ko: "한국어" },
                level: { en: ["Native"], ko: ["모국어"] }
            }
        ],
        technical: [
            {
                name: { en: "Artificial Intelligence", ko: "인공지능" },
                level: {
                    en: ["PyTorch", "Generative Models (Diffusion, GAN)", "On-Device AI Optimization"],
                    ko: ["PyTorch", "생성형 모델(Diffusion, GAN)", "온디바이스 AI 최적화"]
                }
            },
            {
                name: { en: "Programming Languages", ko: "프로그래밍 언어" },
                level: {
                    en: ["Python", "C/C++"],
                }
            }
        ]
    }
};