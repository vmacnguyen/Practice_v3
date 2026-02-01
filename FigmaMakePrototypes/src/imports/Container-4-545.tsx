import svgPaths from "./svg-rpb6ld1k7f";
import imgImageWithFallback from "figma:asset/2568c405ca93ab6f29e12267ef943e9a324f10d8.png";
import imgImageWithFallback1 from "figma:asset/6e4d7a34fd6d93b14b96b576edc875c09b388a16.png";
import imgImageWithFallback2 from "figma:asset/5165ce679619eea3880750f8f6b8f94b9963fe52.png";

function Heading() {
  return (
    <div className="h-[19.998px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#0a0a0a] text-[14px] top-[0.57px] tracking-[-0.1504px] w-[104px] whitespace-pre-wrap">Serve Practice - Session 1</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[15.999px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.52px] w-[140px] whitespace-pre-wrap">Nov 10, 2024 at 2:30 PM</p>
    </div>
  );
}

function VideoCard() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[106.081px] items-start left-0 pt-[11.999px] px-[11.999px] top-[284.23px] w-[173.381px]" data-name="VideoCard">
      <Heading />
      <Paragraph />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[260.231px] left-0 top-0 w-[173.381px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[23.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.998 23.998">
        <g id="Icon">
          <path d={svgPaths.p1fa69000} fill="var(--fill-0, #101828)" id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99983" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] relative rounded-[17529000px] shrink-0 size-[47.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[4px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] content-stretch flex h-[260.231px] items-center justify-center left-0 pr-[0.008px] top-0 w-[173.381px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.7)] h-[23.998px] left-[123.43px] rounded-[4px] top-[228.23px] w-[41.947px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[12px] text-white top-[4.52px]">2:45</p>
    </div>
  );
}

function VideoCard1() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[260.231px] left-0 top-0 w-[173.381px]" data-name="VideoCard">
      <ImageWithFallback />
      <Container1 />
      <Container3 />
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-white border-[0.522px] border-[rgba(0,0,0,0.1)] border-solid h-[391.354px] left-0 overflow-clip rounded-[14px] top-0 w-[174.426px]" data-name="Card">
      <VideoCard />
      <VideoCard1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[19.998px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#0a0a0a] text-[14px] top-[0.57px] tracking-[-0.1504px] w-[145px] whitespace-pre-wrap">Spike Training - Power Work</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[15.999px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.52px] w-[133px] whitespace-pre-wrap">Nov 9, 2024 at 4:15 PM</p>
    </div>
  );
}

function VideoCard2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[106.081px] items-start left-0 pt-[11.999px] px-[11.999px] top-[284.07px] w-[173.381px]" data-name="VideoCard">
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[260.068px] left-0 top-0 w-[173.381px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[23.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.998 23.998">
        <g id="Icon">
          <path d={svgPaths.p1fa69000} fill="var(--fill-0, #101828)" id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99983" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] relative rounded-[17529000px] shrink-0 size-[47.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[4px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] content-stretch flex h-[260.068px] items-center justify-center left-0 pr-[0.008px] top-0 w-[173.381px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.7)] h-[23.998px] left-[125.48px] rounded-[4px] top-[228.07px] w-[39.899px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[12px] text-white top-[4.52px]">3:12</p>
    </div>
  );
}

function VideoCard3() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[260.068px] left-0 top-0 w-[173.381px]" data-name="VideoCard">
      <ImageWithFallback1 />
      <Container4 />
      <Container6 />
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-white border-[0.522px] border-[rgba(0,0,0,0.1)] border-solid h-[391.354px] left-[186.42px] overflow-clip rounded-[14px] top-0 w-[174.426px]" data-name="Card">
      <VideoCard2 />
      <VideoCard3 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[19.998px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#0a0a0a] text-[14px] top-[0.57px] tracking-[-0.1504px]">Blocking Drills</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[15.999px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.52px] w-[141px] whitespace-pre-wrap">Nov 8, 2024 at 10:00 AM</p>
    </div>
  );
}

function VideoCard4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[106.081px] items-start left-0 pt-[11.999px] px-[11.999px] top-[154.03px] w-[173.381px]" data-name="VideoCard">
      <Heading2 />
      <Paragraph2 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute h-[130.03px] left-0 top-0 w-[173.381px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[23.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.998 23.998">
        <g id="Icon">
          <path d={svgPaths.p1fa69000} fill="var(--fill-0, #101828)" id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99983" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] relative rounded-[17529000px] shrink-0 size-[47.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[4px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] content-stretch flex h-[130.03px] items-center justify-center left-0 pr-[0.008px] top-0 w-[173.381px]" data-name="Container">
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.7)] h-[23.998px] left-[124.98px] rounded-[4px] top-[98.03px] w-[40.405px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[12px] text-white top-[4.52px]">1:58</p>
    </div>
  );
}

function VideoCard5() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[130.03px] left-0 top-0 w-[173.381px]" data-name="VideoCard">
      <ImageWithFallback2 />
      <Container7 />
      <Container9 />
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-white border-[0.522px] border-[rgba(0,0,0,0.1)] border-solid h-[412.397px] left-0 overflow-clip rounded-[14px] top-[403.35px] w-[174.426px]" data-name="Card">
      <VideoCard4 />
      <VideoCard5 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[19.998px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#0a0a0a] text-[14px] top-[0.57px] tracking-[-0.1504px]">Passing Fundamentals</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[15.999px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.52px] w-[134px] whitespace-pre-wrap">Nov 7, 2024 at 3:45 PM</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#eceef2] h-[17.043px] left-0 rounded-[8px] top-[21.04px] w-[98.481px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.522px] py-[0.522px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#030213] text-[12px]">Fundamentals</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.522px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[#eceef2] h-[17.043px] left-0 rounded-[8px] top-[42.09px] w-[76.557px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.522px] py-[0.522px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#030213] text-[12px]">Technique</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.522px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[59.13px] relative shrink-0 w-full" data-name="Container">
      <Badge />
      <Badge1 />
    </div>
  );
}

function VideoCard6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[127.124px] items-start left-0 pt-[11.999px] px-[11.999px] top-[284.23px] w-[173.381px]" data-name="VideoCard">
      <Heading3 />
      <Paragraph3 />
      <Container10 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="absolute h-[260.231px] left-0 top-0 w-[173.381px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[23.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.998 23.998">
        <g id="Icon">
          <path d={svgPaths.p1fa69000} fill="var(--fill-0, #101828)" id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99983" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] relative rounded-[17529000px] shrink-0 size-[47.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[4px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] content-stretch flex h-[260.231px] items-center justify-center left-0 pr-[0.008px] top-0 w-[173.381px]" data-name="Container">
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.7)] h-[23.998px] left-[123.24px] rounded-[4px] top-[228.23px] w-[42.143px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[12px] text-white top-[4.52px]">4:20</p>
    </div>
  );
}

function VideoCard7() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[260.231px] left-0 top-0 w-[173.381px]" data-name="VideoCard">
      <ImageWithFallback3 />
      <Container11 />
      <Container13 />
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute bg-white border-[0.522px] border-[rgba(0,0,0,0.1)] border-solid h-[412.397px] left-[186.42px] overflow-clip rounded-[14px] top-[403.35px] w-[174.426px]" data-name="Card">
      <VideoCard6 />
      <VideoCard7 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[19.998px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#0a0a0a] text-[14px] top-[0.57px] tracking-[-0.1504px] w-[105px] whitespace-pre-wrap">Game Footage - Tournament</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[15.999px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.52px] w-[135px] whitespace-pre-wrap">Nov 6, 2024 at 6:30 PM</p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[#eceef2] h-[17.043px] left-0 rounded-[8px] top-0 w-[50.469px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.522px] py-[0.522px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#030213] text-[12px]">Game</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.522px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[#eceef2] h-[17.043px] left-[54.47px] rounded-[8px] top-0 w-[86.221px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.522px] py-[0.522px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#030213] text-[12px]">Tournament</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.522px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute bg-[#eceef2] h-[17.043px] left-0 rounded-[8px] top-[21.04px] w-[104.326px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.522px] py-[0.522px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#030213] text-[12px]">Match Analysis</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.522px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[38.087px] relative shrink-0 w-full" data-name="Container">
      <Badge2 />
      <Badge3 />
      <Badge4 />
    </div>
  );
}

function VideoCard8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[106.081px] items-start left-0 pt-[11.999px] px-[11.999px] top-[284.07px] w-[173.381px]" data-name="VideoCard">
      <Heading4 />
      <Paragraph4 />
      <Container14 />
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="absolute h-[260.068px] left-0 top-0 w-[173.381px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[23.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.998 23.998">
        <g id="Icon">
          <path d={svgPaths.p1fa69000} fill="var(--fill-0, #101828)" id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99983" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] relative rounded-[17529000px] shrink-0 size-[47.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[4px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] content-stretch flex h-[260.068px] items-center justify-center left-0 pr-[0.008px] top-0 w-[173.381px]" data-name="Container">
      <Container16 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.7)] h-[23.998px] left-[117.87px] rounded-[4px] top-[228.07px] w-[47.514px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[12px] text-white top-[4.52px]">15:42</p>
    </div>
  );
}

function VideoCard9() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[260.068px] left-0 top-0 w-[173.381px]" data-name="VideoCard">
      <ImageWithFallback4 />
      <Container15 />
      <Container17 />
    </div>
  );
}

function Card4() {
  return (
    <div className="absolute bg-white border-[0.522px] border-[rgba(0,0,0,0.1)] border-solid h-[391.191px] left-0 overflow-clip rounded-[14px] top-[827.75px] w-[174.426px]" data-name="Card">
      <VideoCard8 />
      <VideoCard9 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[19.998px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#0a0a0a] text-[14px] top-[0.57px] tracking-[-0.1504px]">Setting Practice</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[15.999px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.52px] w-[135px] whitespace-pre-wrap">Nov 5, 2024 at 2:00 PM</p>
    </div>
  );
}

function Badge5() {
  return (
    <div className="absolute bg-[#eceef2] h-[17.043px] left-0 rounded-[8px] top-0 w-[58.713px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.522px] py-[0.522px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#030213] text-[12px]">Setting</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.522px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge6() {
  return (
    <div className="absolute bg-[#eceef2] h-[17.043px] left-0 rounded-[8px] top-[21.04px] w-[98.481px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.522px] py-[0.522px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#030213] text-[12px]">Fundamentals</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.522px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge7() {
  return (
    <div className="absolute bg-[#eceef2] h-[17.043px] left-0 rounded-[8px] top-[42.09px] w-[76.557px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.522px] py-[0.522px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#030213] text-[12px]">Technique</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.522px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[59.13px] relative shrink-0 w-full" data-name="Container">
      <Badge5 />
      <Badge6 />
      <Badge7 />
    </div>
  );
}

function VideoCard10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[127.124px] items-start left-0 pt-[11.999px] px-[11.999px] top-[154.03px] w-[173.381px]" data-name="VideoCard">
      <Heading5 />
      <Paragraph5 />
      <Container18 />
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="absolute h-[130.03px] left-0 top-0 w-[173.381px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[23.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.998 23.998">
        <g id="Icon">
          <path d={svgPaths.p1fa69000} fill="var(--fill-0, #101828)" id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99983" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] relative rounded-[17529000px] shrink-0 size-[47.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[4px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] content-stretch flex h-[130.03px] items-center justify-center left-0 pr-[0.008px] top-0 w-[173.381px]" data-name="Container">
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.7)] h-[23.998px] left-[123.27px] rounded-[4px] top-[98.03px] w-[42.111px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[12px] text-white top-[4.52px]">3:30</p>
    </div>
  );
}

function VideoCard11() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[130.03px] left-0 top-0 w-[173.381px]" data-name="VideoCard">
      <ImageWithFallback5 />
      <Container19 />
      <Container21 />
    </div>
  );
}

function Card5() {
  return (
    <div className="absolute bg-white border-[0.522px] border-[rgba(0,0,0,0.1)] border-solid h-[391.191px] left-[186.42px] overflow-clip rounded-[14px] top-[827.75px] w-[174.426px]" data-name="Card">
      <VideoCard10 />
      <VideoCard11 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
    </div>
  );
}