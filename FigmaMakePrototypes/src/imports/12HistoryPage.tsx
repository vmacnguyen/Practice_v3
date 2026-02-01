import svgPaths from "./svg-2zm4m3lll8";
import imgImageWithFallback from "figma:asset/2568c405ca93ab6f29e12267ef943e9a324f10d8.png";
import imgImageWithFallback1 from "figma:asset/6e4d7a34fd6d93b14b96b576edc875c09b388a16.png";
import imgImageWithFallback2 from "figma:asset/5165ce679619eea3880750f8f6b8f94b9963fe52.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d="M10 5L33.3333 20L10 35V5Z" fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center left-[151px] pl-[4px] rounded-[16777200px] size-[80px] top-[67.44px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.6)] h-[28px] left-[311.44px] rounded-[4px] top-[170.88px] w-[54.563px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[12px] not-italic text-[14px] text-white top-[4.5px] tracking-[-0.1504px]">2:34</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.6)] h-[28px] left-[16px] rounded-[4px] top-[16px] w-[118.219px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[12px] not-italic text-[14px] text-white top-[4.5px] tracking-[-0.1504px]">Full Recording</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[214.875px] left-[24px] overflow-clip rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[-646px] w-[382px]" data-name="Container" style={{ backgroundImage: "linear-gradient(150.642deg, rgb(43, 127, 255) 0%, rgb(152, 16, 250) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Button />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] top-[0.5px] tracking-[-0.1504px]">Overall Score</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[23.5px] items-start left-[44.7px] top-[14px] w-[38.344px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)] tracking-[-0.4492px]">/100</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[36px] text-white top-[0.5px] tracking-[0.3691px]">87</p>
      <Text />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[64px] relative shrink-0 w-[86.391px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[28px] relative rounded-[16777200px] shrink-0 w-[103.719px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[12px] not-italic text-[14px] text-white top-[4.5px] tracking-[-0.1504px] w-[80px] whitespace-pre-wrap">+5 from last</p>
      </div>
    </div>
  );
}

function SessionDetailScreen1() {
  return (
    <div className="h-[64px] relative shrink-0 w-[342px]" data-name="SessionDetailScreen">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.8)] top-px">Accuracy</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[24px] text-white top-0 tracking-[0.0703px] w-[54px] whitespace-pre-wrap">84%</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] col-[1] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[12px] px-[12px] relative size-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.8)] top-px">Consistency</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[24px] text-white top-0 tracking-[0.0703px] w-[54px] whitespace-pre-wrap">88%</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] col-[2] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[12px] px-[12px] relative size-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function SessionDetailScreen2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[342px]" data-name="SessionDetailScreen">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-[12px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] relative size-full">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] h-[220px] items-start left-[24px] pl-[20px] py-[20px] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[-407.13px] w-[382px]" data-name="Card" style={{ backgroundImage: "linear-gradient(150.062deg, rgb(21, 93, 252) 0%, rgb(152, 16, 250) 100%)" }}>
      <SessionDetailScreen1 />
      <SessionDetailScreen2 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#0a0a0a] text-[18px] top-0 tracking-[-0.4395px]">Performance Metrics</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3c6311f0} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3d728000} id="Vector_3" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#dcfce7] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">Shots Made</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#0a0a0a] text-[20px] top-0 tracking-[-0.4492px] w-[58px] whitespace-pre-wrap">42/50</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[48px] relative shrink-0 w-[76.703px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="col-[1] content-stretch flex gap-[12px] items-center relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M8 2V6" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 2V6" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32f12c00} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 10H21" id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">Release Time</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#0a0a0a] text-[20px] top-0 tracking-[-0.4492px]">0.65s</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[48px] relative shrink-0 w-[86.039px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="col-[2] content-stretch flex gap-[12px] items-center relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function SessionDetailScreen3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[342px]" data-name="SessionDetailScreen">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-[16px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] relative size-full">
        <Container8 />
        <Container11 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white h-[88px] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Card">
      <div className="content-stretch flex flex-col items-start pl-[20px] py-[20px] relative size-full">
        <SessionDetailScreen3 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[156px] items-start left-0 pt-[24px] px-[24px] top-[-187.13px] w-[430px]" data-name="Container">
      <Heading1 />
      <Card1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[36px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[30px] tracking-[0.3955px] whitespace-pre-wrap">History</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Manage your account and preferences</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[172px] items-start left-0 pt-[56px] px-[24px] top-0 w-[430px]" data-name="Container">
      <Heading />
      <Paragraph10 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-white border-[#f3f4f6] border-b border-solid h-[169px] left-0 top-0 w-[430px]" data-name="Container">
      <Container15 />
    </div>
  );
}

function SessionDetailScreen() {
  return (
    <div className="absolute bg-[#f9fafb] h-[1447px] left-0 overflow-clip top-0 w-[430px]" data-name="SessionDetailScreen">
      <Container />
      <Card />
      <Container7 />
      <Container14 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[24px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[13.48%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.7%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.5289">
              <path d={svgPaths.p33b0ef00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[24.02%_37.5%_13.48%_62.5%]" data-name="Vector">
          <div className="absolute inset-[-6.67%_-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 17">
              <path d="M1 1V16" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[13.48%_62.5%_24.02%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-6.67%_-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 17">
              <path d="M1 1V16" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[24.938px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#6a7282] text-[12px] text-center top-px">Plans</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="flex-[1_0_0] h-[44px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Icon3 />
        <Text1 />
      </div>
    </div>
  );
}

function TennisRacket() {
  return (
    <div className="absolute inset-[1.3%_4.56%_7.79%_4.53%]" data-name="tennis_racket">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.7272 32.7272">
        <g id="tennis_racket">
          <path d={svgPaths.p4803900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <TennisRacket />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#155dfc] relative rounded-[16777200px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 size-[70.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[41.117px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[21px] not-italic text-[#155dfc] text-[12px] text-center top-px">Practice</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="flex-[1_0_0] h-[88px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4.8px] items-center pt-[-3.2px] relative size-full">
        <Container19 />
        <Text2 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[24px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p15a59300} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_66.67%_66.67%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-20%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
              <path d="M1 1V6H6" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-[29.17%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-25.01%_-14.29%_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.00022 9.00022">
              <path d="M1 1V6L5 8" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[51.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[26px] not-italic text-[#6a7282] text-[12px] text-center top-px">History</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="flex-[1_0_0] h-[44px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Icon5 />
        <Text3 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between pb-[24px] pl-[16px] pr-[15.992px] relative size-full">
          <Button1 />
          <Button2 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[89px] items-start pt-px relative shrink-0 w-[430px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Container18 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[89px] items-start left-0 pt-px top-[792px] w-[430px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Container17 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[54.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.5px] tracking-[-0.3125px]">6:37 ⚡</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
          <path d={svgPaths.p1e2b3800} fill="var(--fill-0, black)" fillOpacity="0.4" id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%_5.56%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 10">
            <path d={svgPaths.p25535d00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[12px] relative shrink-0 w-[17px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12">
        <g clipPath="url(#clip0_1_2028)" id="Icon">
          <path d={svgPaths.p61ef190} fill="var(--fill-0, black)" fillOpacity="0.4" id="Vector" />
          <path d={svgPaths.p284e9400} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2028">
            <rect fill="white" height="12" width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[11px] relative shrink-0 w-[15px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p36245c80} fill="var(--fill-0, black)" fillOpacity="0.4" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[12px] relative shrink-0 w-[58px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon6 />
        <Icon7 />
        <Icon8 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-white content-stretch flex h-[56px] items-center justify-between left-0 px-[24px] top-0 w-[430px]" data-name="Container">
      <Text4 />
      <Container21 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[17.895px] relative shrink-0 w-[104.686px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.896px] left-0 not-italic text-[#0a0a0a] text-[12.527px] top-[0.34px] tracking-[-0.1346px]">Study These Clips</p>
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[14.318px] relative shrink-0 w-[136.312px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.316px] left-0 not-italic text-[#6a7282] text-[10.737px] top-[0.62px]">Examples from your videos</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[17.895px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Paragraph11 />
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#dcfce7] h-[19.126px] relative rounded-[7.158px] shrink-0 w-[103.128px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7.773px] py-[2.405px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14.316px] not-italic relative shrink-0 text-[#008236] text-[10.737px]">✓ Great Example</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0.615px] border-solid inset-0 pointer-events-none rounded-[7.158px]" />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[14.308px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3081 14.3081">
        <g id="Icon">
          <path d={svgPaths.p2edc8e70} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19234" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex h-[19.126px] items-start justify-between left-0 top-0 w-[204.073px]" data-name="Container">
      <Badge />
      <Icon9 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[17.895px] left-0 overflow-clip top-[22.7px] w-[204.073px]" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.896px] left-0 not-italic text-[#0a0a0a] text-[12.527px] top-[0.34px] tracking-[-0.1346px]">Serve Practice - Session 1</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[28.635px] left-0 overflow-clip top-[44.17px] w-[204.073px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.316px] left-0 not-italic text-[#4a5565] text-[10.737px] top-[0.62px] w-[191.483px] whitespace-pre-wrap">Perfect serve form with excellent toss consistency</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[14.318px] left-0 top-[79.96px] w-[34.674px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.316px] left-0 not-italic text-[#6a7282] text-[10.737px] top-[0.62px]">Nov 10</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[94.282px] left-[107.36px] top-[10.73px] w-[204.073px]" data-name="Container">
      <Container27 />
      <Heading3 />
      <Paragraph12 />
      <Text5 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute left-0 size-[85.897px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[21.472px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.4718 21.4718">
        <g id="Icon">
          <path d={svgPaths.pa264e00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.78931" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.3)] content-stretch flex items-center justify-center left-0 size-[85.897px] top-0" data-name="Container">
      <Icon10 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[5.37px] size-[10.731px] top-[3.58px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7311 10.7311">
        <g clipPath="url(#clip0_1_2117)" id="Icon">
          <path d={svgPaths.pb5af80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.894256" />
          <path d={svgPaths.p2326b380} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.894256" />
        </g>
        <defs>
          <clipPath id="clip0_1_2117">
            <rect fill="white" height="10.7311" width="10.7311" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.7)] h-[17.895px] left-[34.03px] rounded-[3.579px] top-[64.42px] w-[48.29px]" data-name="Container">
      <Icon11 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.316px] left-[19.67px] not-italic text-[10.737px] text-white top-[2.4px]">2:34</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-[#101828] left-[10.73px] overflow-clip rounded-[8.948px] size-[85.897px] top-[10.73px]" data-name="Container">
      <ImageWithFallback />
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[115.744px] left-0 top-0 w-[322.163px]" data-name="Container">
      <Container26 />
      <Container28 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white border-[0.615px] border-[rgba(0,0,0,0.1)] border-solid h-[116.974px] left-0 overflow-clip rounded-[12.527px] shadow-[0px_0.895px_2.684px_0px_rgba(0,0,0,0.1),0px_0.895px_1.79px_-0.895px_rgba(0,0,0,0.1)] top-0 w-[323.394px]" data-name="Button">
      <Container25 />
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#ffedd4] h-[19.126px] relative rounded-[7.158px] shrink-0 w-[112.051px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7.773px] py-[2.405px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14.316px] not-italic relative shrink-0 text-[#ca3500] text-[10.737px]">⚠ Learn From This</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffd6a7] border-[0.615px] border-solid inset-0 pointer-events-none rounded-[7.158px]" />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[14.308px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3081 14.3081">
        <g id="Icon">
          <path d={svgPaths.p2004ee00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19234" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex h-[19.126px] items-start justify-between left-0 top-0 w-[204.073px]" data-name="Container">
      <Badge1 />
      <Icon12 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[17.895px] left-0 overflow-clip top-[22.7px] w-[204.073px]" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.896px] left-0 not-italic text-[#0a0a0a] text-[12.527px] top-[0.34px] tracking-[-0.1346px]">Spike Training - Power Work</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[28.635px] left-0 overflow-clip top-[44.17px] w-[204.073px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.316px] left-0 not-italic text-[#4a5565] text-[10.737px] top-[0.62px] w-[190.588px] whitespace-pre-wrap">Approach angle needs adjustment for better power</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[14.318px] relative shrink-0 w-[29.77px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.316px] left-0 not-italic text-[#6a7282] text-[10.737px] top-[0.62px]">Nov 9</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[14.318px] relative shrink-0 w-[5.067px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.316px] left-0 not-italic text-[#6a7282] text-[10.737px] top-[0.62px]">•</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[14.318px] relative shrink-0 w-[27.741px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.316px] left-0 not-italic text-[#6a7282] text-[10.737px] top-[0.62px]">Spike</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex gap-[7.154px] h-[14.318px] items-center left-0 top-[79.96px] w-[204.073px]" data-name="Container">
      <Text6 />
      <Text7 />
      <Text8 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[94.282px] left-[107.36px] top-[10.73px] w-[204.073px]" data-name="Container">
      <Container33 />
      <Heading4 />
      <Paragraph13 />
      <Container34 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute left-0 size-[85.897px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[21.472px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.4718 21.4718">
        <g id="Icon">
          <path d={svgPaths.p4d4cc80} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.78931" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.3)] content-stretch flex items-center justify-center left-0 size-[85.897px] top-0" data-name="Container">
      <Icon13 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[5.37px] size-[10.731px] top-[3.58px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7311 10.7311">
        <g clipPath="url(#clip0_1_2101)" id="Icon">
          <path d={svgPaths.p1b56cc00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.894256" />
          <path d={svgPaths.p64c5e0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.894256" />
        </g>
        <defs>
          <clipPath id="clip0_1_2101">
            <rect fill="white" height="10.7311" width="10.7311" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.7)] h-[17.895px] left-[35.57px] rounded-[3.579px] top-[64.42px] w-[46.751px]" data-name="Container">
      <Icon14 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.316px] left-[19.67px] not-italic text-[10.737px] text-white top-[2.4px]">1:45</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-[#101828] left-[10.73px] overflow-clip rounded-[8.948px] size-[85.897px] top-[10.73px]" data-name="Container">
      <ImageWithFallback1 />
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[115.744px] left-0 top-0 w-[322.163px]" data-name="Container">
      <Container32 />
      <Container35 />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-white border-[0.615px] border-[rgba(0,0,0,0.1)] border-solid h-[116.974px] left-0 overflow-clip rounded-[12.527px] shadow-[0px_0.895px_2.684px_0px_rgba(0,0,0,0.1),0px_0.895px_1.79px_-0.895px_rgba(0,0,0,0.1)] top-[127.71px] w-[323.394px]" data-name="Button">
      <Container31 />
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#dcfce7] h-[19.126px] relative rounded-[7.158px] shrink-0 w-[103.128px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7.773px] py-[2.405px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14.316px] not-italic relative shrink-0 text-[#008236] text-[10.737px]">✓ Great Example</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0.615px] border-solid inset-0 pointer-events-none rounded-[7.158px]" />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[14.308px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3081 14.3081">
        <g id="Icon">
          <path d={svgPaths.p2004ee00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19234" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex h-[19.126px] items-start justify-between left-0 top-0 w-[204.073px]" data-name="Container">
      <Badge2 />
      <Icon15 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[17.895px] left-0 overflow-clip top-[22.7px] w-[204.073px]" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.896px] left-0 not-italic text-[#0a0a0a] text-[12.527px] top-[0.34px] tracking-[-0.1346px]">Passing Fundamentals</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[28.635px] left-0 overflow-clip top-[44.17px] w-[204.073px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.316px] left-0 not-italic text-[#4a5565] text-[10.737px] top-[0.62px] w-[154.797px] whitespace-pre-wrap">Great platform angle and body positioning</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[14.318px] relative shrink-0 w-[29.049px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.316px] left-0 not-italic text-[#6a7282] text-[10.737px] top-[0.62px]">Nov 7</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[14.318px] relative shrink-0 w-[5.067px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.316px] left-0 not-italic text-[#6a7282] text-[10.737px] top-[0.62px]">•</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[14.318px] relative shrink-0 w-[39.116px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.316px] left-0 not-italic text-[#6a7282] text-[10.737px] top-[0.62px]">Passing</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex gap-[7.154px] h-[14.318px] items-center left-0 top-[79.96px] w-[204.073px]" data-name="Container">
      <Text9 />
      <Text10 />
      <Text11 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[94.282px] left-[107.36px] top-[10.73px] w-[204.073px]" data-name="Container">
      <Container40 />
      <Heading5 />
      <Paragraph14 />
      <Container41 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute left-0 size-[85.897px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[21.472px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.4718 21.4718">
        <g id="Icon">
          <path d={svgPaths.p23813c80} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.78931" />
        </g>
      </svg>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.3)] content-stretch flex items-center justify-center left-0 size-[85.897px] top-0" data-name="Container">
      <Icon16 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[5.37px] size-[10.731px] top-[3.58px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7311 10.7311">
        <g clipPath="url(#clip0_1_2091)" id="Icon">
          <path d={svgPaths.p121324f1} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.894256" />
          <path d={svgPaths.p32e6900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.894256" />
        </g>
        <defs>
          <clipPath id="clip0_1_2091">
            <rect fill="white" height="10.7311" width="10.7311" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.7)] h-[17.895px] left-[35.9px] rounded-[3.579px] top-[64.42px] w-[46.415px]" data-name="Container">
      <Icon17 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.316px] left-[19.67px] not-italic text-[10.737px] text-white top-[2.4px]">3:12</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bg-[#101828] left-[10.73px] overflow-clip rounded-[8.948px] size-[85.897px] top-[10.73px]" data-name="Container">
      <ImageWithFallback2 />
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[115.744px] left-0 top-0 w-[322.163px]" data-name="Container">
      <Container39 />
      <Container42 />
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-white border-[0.615px] border-[rgba(0,0,0,0.1)] border-solid h-[116.974px] left-0 overflow-clip rounded-[12.527px] shadow-[0px_0.895px_2.684px_0px_rgba(0,0,0,0.1),0px_0.895px_1.79px_-0.895px_rgba(0,0,0,0.1)] top-[255.41px] w-[323.394px]" data-name="Button">
      <Container38 />
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[#ffedd4] h-[19.126px] relative rounded-[7.158px] shrink-0 w-[112.051px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7.773px] py-[2.405px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14.316px] not-italic relative shrink-0 text-[#ca3500] text-[10.737px]">⚠ Learn From This</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffd6a7] border-[0.615px] border-solid inset-0 pointer-events-none rounded-[7.158px]" />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[14.308px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3081 14.3081">
        <g id="Icon">
          <path d={svgPaths.p35dd10e0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19234" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex h-[19.126px] items-start justify-between left-0 top-0 w-[204.073px]" data-name="Container">
      <Badge3 />
      <Icon18 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[17.895px] left-0 overflow-clip top-[22.7px] w-[204.073px]" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.896px] left-0 not-italic text-[#0a0a0a] text-[12.527px] top-[0.34px] tracking-[-0.1346px]">Blocking Drills</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[28.635px] left-0 overflow-clip top-[44.17px] w-[204.073px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.316px] left-0 not-italic text-[#4a5565] text-[10.737px] top-[0.62px] w-[199.536px] whitespace-pre-wrap">Hand positioning could be higher at the net</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[14.318px] relative shrink-0 w-[29.789px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.316px] left-0 not-italic text-[#6a7282] text-[10.737px] top-[0.62px]">Nov 8</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[14.318px] relative shrink-0 w-[5.067px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.316px] left-0 not-italic text-[#6a7282] text-[10.737px] top-[0.62px]">•</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[14.318px] relative shrink-0 w-[43.405px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.316px] left-0 not-italic text-[#6a7282] text-[10.737px] top-[0.62px]">Blocking</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex gap-[7.154px] h-[14.318px] items-center left-0 top-[79.96px] w-[204.073px]" data-name="Container">
      <Text12 />
      <Text13 />
      <Text14 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[94.282px] left-[107.36px] top-[10.73px] w-[204.073px]" data-name="Container">
      <Container47 />
      <Heading6 />
      <Paragraph15 />
      <Container48 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="absolute left-0 size-[85.897px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[21.472px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.4718 21.4718">
        <g id="Icon">
          <path d={svgPaths.p4d4cc80} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.78931" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.3)] content-stretch flex items-center justify-center left-0 size-[85.897px] top-0" data-name="Container">
      <Icon19 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-[5.37px] size-[10.731px] top-[3.58px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7311 10.7311">
        <g clipPath="url(#clip0_1_2084)" id="Icon">
          <path d={svgPaths.pb6b1780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.894256" />
          <path d={svgPaths.p22fa7d80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.894256" />
        </g>
        <defs>
          <clipPath id="clip0_1_2084">
            <rect fill="white" height="10.7311" width="10.7311" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.7)] h-[17.895px] left-[33.66px] rounded-[3.579px] top-[64.42px] w-[48.655px]" data-name="Container">
      <Icon20 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14.316px] left-[19.67px] not-italic text-[10.737px] text-white top-[2.4px]">0:58</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute bg-[#101828] left-[10.73px] overflow-clip rounded-[8.948px] size-[85.897px] top-[10.73px]" data-name="Container">
      <ImageWithFallback3 />
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[115.744px] left-0 top-0 w-[322.163px]" data-name="Container">
      <Container46 />
      <Container49 />
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-white border-[0.615px] border-[rgba(0,0,0,0.1)] border-solid h-[116.974px] left-0 overflow-clip rounded-[12.527px] shadow-[0px_0.895px_2.684px_0px_rgba(0,0,0,0.1),0px_0.895px_1.79px_-0.895px_rgba(0,0,0,0.1)] top-[383.12px] w-[323.394px]" data-name="Button">
      <Container45 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[500px] relative shrink-0 w-[365px]" data-name="Container">
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10.731px] h-[529px] items-start left-[39px] top-[194px] w-[323px]" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

export default function Component12HistoryPage() {
  return (
    <div className="bg-white relative size-full" data-name="12 history page">
      <SessionDetailScreen />
      <Container16 />
      <Container20 />
      <Container22 />
    </div>
  );
}