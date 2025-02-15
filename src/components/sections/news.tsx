import Link from "next/link";
import Image from "next/image";

import PostImageOne from "@/assets/images/news/post-1.jpg";
import PostImageTwo from "@/assets/images/news/post-2.png";
import PostImageThree from "@/assets/images/news/post-3.png";

const newsPosts = [
  {
    title: "Welcome to Flare Fair: DeFi Gamified",
    link: "https://flare.network/flare-fair/",
    imgSrc: PostImageOne,
  },
  {
    title:
      "Shaping the future of blockchain and AI: Flare x Google Cloud Hackathon",
    link: "https://flare.network/flare-x-google-cloud-hackathon/",
    imgSrc: PostImageTwo,
  },
  {
    title: "Flare Content Bounty: Get paid for creativity",
    link: "https://flare.network/flare-content-creation-bounty/",
    imgSrc: PostImageThree,
  },
];

const NewsSection = () => {
  return (
    <section id="news">
      <div className="space-y-16 py-20 px-6">
        <h3 className="text-[42px] lg:text-[46px] tracking-tight text-center">
          Latest Flare news
        </h3>

        <div className="grid gap-14 max-w-screen-xl mx-auto md:grid-cols-3">
          {newsPosts.map((post, idx) => (
            <div key={idx} className="flex flex-col justify-between relative">
              <div className="aspect-video relative overflow-hidden grow-0">
                <Image
                  width={328}
                  height={184}
                  src={post.imgSrc}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[20px] mb-5 mt-2 hover:underline transition">
                {post.title}
              </p>
              <Link
                href="https://flare.network/category/flare-updates/"
                className="text-[#E62058] bg-[#F7ECEF] rounded-full px-4 py-1.5 uppercase text-xs hover:bg-[#242425] hover:text-white transition justify-self-end self-start"
              >
                Flare Updates
              </Link>
              <Link href={post.link} className="absolute h-full w-full"></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
