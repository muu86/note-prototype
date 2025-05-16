"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { Marquee } from "./magicui/marquee"

const reviews = [
  // {
  //   name: "",
  //   username: "@jack",
  //   body: "",
  //   img: "https://avatar.vercel.sh/jack",
  // },
  // {
  //   name: "Jill",
  //   username: "@jill",
  //   body: "I don't know what to say. I'm speechless. This is amazing.",
  //   img: "https://avatar.vercel.sh/jill",
  // },
  // {
  //   name: "John",
  //   username: "@john",
  //   body: "I'm at a loss for words. This is amazing. I love it.",
  //   img: "https://avatar.vercel.sh/john",
  // },
  // {
  //   name: "Jane",
  //   username: "@jane",
  //   body: "I'm at a loss for words. This is amazing. I love it.",
  //   img: "https://avatar.vercel.sh/jane",
  // },
  // {
  //   name: "Jenny",
  //   username: "@jenny",
  //   body: "I'm at a loss for words. This is amazing. I love it.",
  //   img: "https://avatar.vercel.sh/jenny",
  // },
  // {
  //   name: "James",
  //   username: "@james",
  //   body: "I'm at a loss for words. This is amazing. I love it.",
  //   img: "https://avatar.vercel.sh/james",
  // },
  {
    name: "김지윤",
    username: "@yuni_blossom",
    body: "처음엔 반신반의했는데 실제로 써보니까 너무 편리하고 직관적이에요. 이제 이 서비스 없이는 못 살겠어요!",
    img: "https://avatar.vercel.sh/yuni",
  },
  {
    name: "박성호",
    username: "@ho_park88",
    body: "고객지원도 빠르고 기능도 깔끔하게 잘 되어 있어요. 덕분에 업무 효율이 많이 올라갔습니다.",
    img: "https://avatar.vercel.sh/ho_park88",
  },
  {
    name: "이서연",
    username: "@seoyeon_luv",
    body: "모바일에서도 너무 잘 작동해서 이동 중에도 문제없이 사용할 수 있었어요. 강력 추천합니다!",
    img: "https://avatar.vercel.sh/seoyeon_luv",
  },
  {
    name: "정민수",
    username: "@ms_jung99",
    body: "UI/UX가 정말 잘 되어 있어요. 처음 쓰는 사람도 어렵지 않게 적응할 수 있어요.",
    img: "https://avatar.vercel.sh/ms_jung99",
  },
  {
    name: "최다은",
    username: "@daeun_choi",
    body: "비슷한 서비스 써봤지만 여기가 제일 안정적이고 신뢰가 갑니다. 꾸준히 이용 중이에요.",
    img: "https://avatar.vercel.sh/daeun_choi",
  },
  {
    name: "윤재훈",
    username: "@jay_hun",
    body: "기대 이상이에요. 특히 자동화 기능이 진짜 신의 한 수입니다. 시간 절약 확실히 돼요.",
    img: "https://avatar.vercel.sh/jay_hun",
  },
  {
    name: "강하늘",
    username: "@blue_kang",
    body: "직관적이고 깔끔한 디자인이 마음에 들어요. 기능도 딱 필요한 것들만 잘 모아져 있어서 좋아요.",
    img: "https://avatar.vercel.sh/blue_kang",
  },
  {
    name: "오지현",
    username: "@oh_jhyun",
    body: "업데이트가 자주 돼서 점점 더 좋아지는 게 느껴져요. 피드백도 반영 잘 해줘서 만족도 높아요.",
    img: "https://avatar.vercel.sh/oh_jhyun",
  },
  {
    name: "배영호",
    username: "@young_baeho",
    body: "소소하지만 디테일이 살아있어서 감탄했어요. 개발자분들 정말 고생 많으셨을 듯!",
    img: "https://avatar.vercel.sh/young_baeho",
  },
  {
    name: "김하늘",
    username: "@sky_kim",
    body: "친구 추천으로 알게 됐는데, 왜 이제야 알았나 싶어요. 제 일상 루틴에 완전히 자리 잡았어요.",
    img: "https://avatar.vercel.sh/skykim",
  },
]

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export function MarqueeSection() {
  return (
    <div className="section relative mt-10 flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee
        //   pauseOnHover
        className="[--duration:60s]"
      >
        {reviews.map((review) => (
          <motion.div
            key={review.username}
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col items-center justify-center gap-4 px-4"
          >
            <ReviewCard {...review} />
          </motion.div>
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee> */}
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}
