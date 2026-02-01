import svgPaths from "./svg-s28xu4fn5c";

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

function PrimitiveSpan() {
  return (
    <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0 w-[86.078px]" data-name="Primitive.span">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center tracking-[-0.1504px]">🏐 Volleyball</p>
    </div>
  );
}

function Paragraph10() {
  return <div className="h-[24px] shrink-0 w-full" data-name="Paragraph" />;
}

function Paragraph11() {
  return <div className="h-[24px] shrink-0 w-full" data-name="Paragraph" />;
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col h-[53px] items-start left-[22px] top-[138px] w-[382px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#4a5565] text-[16px] tracking-[-0.3125px] w-[min-content] whitespace-pre-wrap">January 29, 2026 4:30PM</p>
      <PrimitiveSpan />
      <Paragraph10 />
      <Paragraph11 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[32px] left-[22px] top-[92px] w-[382px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#0a0a0a] text-[24px] top-0 tracking-[0.0703px]">Session 1</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p33f6b680} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M15.8333 10H4.16667" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#155dfc] text-[16px] top-[-0.5px] tracking-[-0.3125px]">History</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[18px] top-[60px] w-[153.875px]" data-name="Button">
      <Icon3 />
      <Text1 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-white border-[#f3f4f6] border-b border-solid h-[191px] left-0 top-0 w-[430px]" data-name="Container">
      <Container15 />
      <Heading />
      <Button1 />
    </div>
  );
}

function Icon4() {
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

function Button2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center left-[151px] pl-[4px] rounded-[16777200px] size-[80px] top-[67.44px]" data-name="Button">
      <Icon4 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.6)] h-[28px] left-[311.44px] rounded-[4px] top-[170.88px] w-[54.563px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[12px] not-italic text-[14px] text-white top-[4.5px] tracking-[-0.1504px]">2:34</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.6)] h-[28px] left-[16px] rounded-[4px] top-[16px] w-[118.219px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[12px] not-italic text-[14px] text-white top-[4.5px] tracking-[-0.1504px]">Full Recording</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[214.875px] left-[24px] overflow-clip rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[200px] w-[382px]" data-name="Container" style={{ backgroundImage: "linear-gradient(150.642deg, rgb(43, 127, 255) 0%, rgb(152, 16, 250) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Button2 />
      <Container17 />
      <Container18 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#0a0a0a] text-[18px] top-0 tracking-[-0.4395px]">AI Analysis</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3c797180} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ac0b600} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#dcfce7] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[127.797px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#0a0a0a] text-[18px] top-0 tracking-[-0.4395px]">What went well</p>
      </div>
    </div>
  );
}

function SessionDetailScreen4() {
  return (
    <div className="h-[32px] relative shrink-0 w-[342px]" data-name="SessionDetailScreen">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container20 />
        <Heading3 />
      </div>
    </div>
  );
}

function Text2() {
  return <div className="absolute bg-[#00a63e] left-0 rounded-[16777200px] size-[6px] top-[8px]" data-name="Text" />;
}

function Text3() {
  return (
    <div className="absolute h-[24px] left-[14px] top-0 w-[254.422px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Consistent follow-through on shots</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Text4() {
  return <div className="absolute bg-[#00a63e] left-0 rounded-[16777200px] size-[6px] top-[8px]" data-name="Text" />;
}

function Text5() {
  return (
    <div className="absolute h-[24px] left-[14px] top-0 w-[191.477px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Good footwork positioning</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Text6() {
  return <div className="absolute bg-[#00a63e] left-0 rounded-[16777200px] size-[6px] top-[8px]" data-name="Text" />;
}

function Text7() {
  return (
    <div className="absolute h-[24px] left-[14px] top-0 w-[152.398px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Improved ball control</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Text8() {
  return <div className="absolute bg-[#00a63e] left-0 rounded-[16777200px] size-[6px] top-[8px]" data-name="Text" />;
}

function Text9() {
  return (
    <div className="absolute h-[24px] left-[14px] top-0 w-[222.008px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Better arc on long-range shots</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text8 />
      <Text9 />
    </div>
  );
}

function SessionDetailScreen5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[342px]" data-name="SessionDetailScreen">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative size-full">
        <ListItem />
        <ListItem1 />
        <ListItem2 />
        <ListItem3 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white h-[234px] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Card">
      <div className="content-stretch flex flex-col gap-[36px] items-start pl-[20px] py-[20px] relative size-full">
        <SessionDetailScreen4 />
        <SessionDetailScreen5 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1952)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p240d7000} id="Vector_2" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p25499600} id="Vector_3" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_1952">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#ffedd4] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[28px] relative shrink-0 w-[142.016px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#0a0a0a] text-[18px] top-0 tracking-[-0.4395px]">Areas to improve</p>
      </div>
    </div>
  );
}

function SessionDetailScreen6() {
  return (
    <div className="h-[32px] relative shrink-0 w-[342px]" data-name="SessionDetailScreen">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container21 />
        <Heading4 />
      </div>
    </div>
  );
}

function Text10() {
  return <div className="absolute bg-[#f54900] left-0 rounded-[16777200px] size-[6px] top-[8px]" data-name="Text" />;
}

function Text11() {
  return (
    <div className="absolute h-[24px] left-[14px] top-0 w-[197.758px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Elbow alignment on release</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Text12() {
  return <div className="absolute bg-[#f54900] left-0 rounded-[16777200px] size-[6px] top-[8px]" data-name="Text" />;
}

function Text13() {
  return (
    <div className="absolute h-[24px] left-[14px] top-0 w-[181.109px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Jump height consistency</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Text14() {
  return <div className="absolute bg-[#f54900] left-0 rounded-[16777200px] size-[6px] top-[8px]" data-name="Text" />;
}

function Text15() {
  return (
    <div className="absolute h-[24px] left-[14px] top-0 w-[217.109px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Shot selection under pressure</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text14 />
      <Text15 />
    </div>
  );
}

function SessionDetailScreen7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[342px]" data-name="SessionDetailScreen">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative size-full">
        <ListItem4 />
        <ListItem5 />
        <ListItem6 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white h-[200px] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Card">
      <div className="content-stretch flex flex-col gap-[36px] items-start pl-[20px] py-[20px] relative size-full">
        <SessionDetailScreen6 />
        <SessionDetailScreen7 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[518px] items-start left-[2px] pt-[24px] px-[24px] top-[415px] w-[430px]" data-name="Container">
      <Heading2 />
      <Card2 />
      <Card3 />
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
      <Container16 />
      <Container19 />
    </div>
  );
}

function Icon7() {
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

function Text16() {
  return (
    <div className="h-[16px] relative shrink-0 w-[24.938px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#6a7282] text-[12px] text-center top-px">Plans</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="flex-[1_0_0] h-[44px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Icon7 />
        <Text16 />
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

function Icon8() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <TennisRacket />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#155dfc] relative rounded-[16777200px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 size-[70.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[16px] relative shrink-0 w-[41.117px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[21px] not-italic text-[#155dfc] text-[12px] text-center top-px">Practice</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="flex-[1_0_0] h-[88px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4.8px] items-center pt-[-3.2px] relative size-full">
        <Container25 />
        <Text17 />
      </div>
    </div>
  );
}

function Icon9() {
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

function Text18() {
  return (
    <div className="h-[16px] relative shrink-0 w-[51.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[26px] not-italic text-[#6a7282] text-[12px] text-center top-px">History</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="flex-[1_0_0] h-[44px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Icon9 />
        <Text18 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between pb-[24px] pl-[16px] pr-[15.992px] relative size-full">
          <Button3 />
          <Button4 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[89px] items-start pt-px relative shrink-0 w-[430px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Container24 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[89px] items-start left-0 pt-px top-[1143px] w-[430px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Container23 />
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[24px] relative shrink-0 w-[54.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.5px] tracking-[-0.3125px]">6:37 ⚡</p>
      </div>
    </div>
  );
}

function Icon10() {
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

function Icon11() {
  return (
    <div className="h-[12px] relative shrink-0 w-[17px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12">
        <g clipPath="url(#clip0_1_1962)" id="Icon">
          <path d={svgPaths.p61ef190} fill="var(--fill-0, black)" fillOpacity="0.4" id="Vector" />
          <path d={svgPaths.p284e9400} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1962">
            <rect fill="white" height="12" width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon12() {
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

function Container27() {
  return (
    <div className="h-[12px] relative shrink-0 w-[58px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon10 />
        <Icon11 />
        <Icon12 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-white content-stretch flex h-[56px] items-center justify-between left-0 px-[24px] top-0 w-[430px]" data-name="Container">
      <Text19 />
      <Container27 />
    </div>
  );
}

export default function Component11AVideoDetailsPage() {
  return (
    <div className="bg-white relative size-full" data-name="11 a video details page">
      <SessionDetailScreen />
      <Container22 />
      <Container26 />
    </div>
  );
}