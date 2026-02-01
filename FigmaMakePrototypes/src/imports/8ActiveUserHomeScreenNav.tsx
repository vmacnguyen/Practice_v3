import svgPaths from "./svg-7nxponxypr";

function Heading1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[84.156px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[#0a0a0a] text-[30px] tracking-[0.3955px]">Welcome back!</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#2b7fff] relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.3125px]">JD</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading1 />
        <Container2 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <Container1 />
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[86.078px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center tracking-[-0.1504px]">🏐 Volleyball</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-[#f9fafb] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <PrimitiveSpan />
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[148px] items-start left-0 pt-[56px] px-[24px] top-0 w-[430px]" data-name="Container">
      <Heading />
      <PrimitiveButton />
    </div>
  );
}

function SessionsScreen1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[87.328px]" data-name="SessionsScreen">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[43.55px] not-italic text-[#155dfc] text-[24px] text-center top-0 tracking-[0.0703px]">24</p>
      </div>
    </div>
  );
}

function SessionsScreen2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[87.328px]" data-name="SessionsScreen">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[44.06px] not-italic text-[#4a5565] text-[12px] text-center top-px">Total Sessions</p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[25px] h-[108px] items-center left-0 pl-[16px] py-[16px] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[190px]" data-name="Card">
      <SessionsScreen1 />
      <SessionsScreen2 />
    </div>
  );
}

function SessionsScreen3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[87.336px]" data-name="SessionsScreen">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[43.29px] not-italic text-[#9810fa] text-[24px] text-center top-0 tracking-[0.0703px]">12h</p>
      </div>
    </div>
  );
}

function SessionsScreen4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[87.336px]" data-name="SessionsScreen">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[43.34px] not-italic text-[#4a5565] text-[12px] text-center top-px">Total Time</p>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[28px] h-[108px] items-start left-[204px] pl-[16px] py-[16px] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[178px]" data-name="Card">
      <SessionsScreen3 />
      <SessionsScreen4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[108px] left-[24px] top-[224px] w-[382px]" data-name="Container">
      <Card />
      <Card1 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#155dfc] h-[36px] left-[25px] rounded-[8px] top-[168px] w-[381px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[155.71px] not-italic text-[14px] text-center text-white top-[8.5px] tracking-[-0.1504px]">Record next session</p>
    </div>
  );
}

function Heading2() {
  return <div className="h-[28px] shrink-0 w-full" data-name="Heading 2" />;
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[906px] items-start left-0 px-[24px] top-[1054px] w-[430px]" data-name="Container">
      <Heading2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[382px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#0a0a0a] text-[18px] top-0 tracking-[-0.4395px]">Latest Analysis</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.5px] tracking-[-0.1504px]">Date + time</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[121px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph />
      </div>
    </div>
  );
}

function TodayScreen() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start justify-between left-[20px] top-[20px] w-[342px]" data-name="TodayScreen">
      <Container6 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pea6a680} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3155f180} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#dcfce7] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[27px] relative shrink-0 w-[127.797px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#0a0a0a] text-[18px] top-[0.5px] tracking-[-0.4395px]">What went well</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[27px] items-center left-0 top-0 w-[342px]" data-name="Container">
      <Container8 />
      <Heading4 />
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px]">• Consistent follow-through on shots</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px]">• Good footwork positioning</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px]">• Improved ball control</p>
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[76px] items-start left-[32px] top-[35px] w-[310px]" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function TodayScreen1() {
  return (
    <div className="absolute h-[111px] left-[20px] top-[287px] w-[342px]" data-name="TodayScreen">
      <Container7 />
      <List />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2017)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p245eb100} id="Vector_2" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18635ff0} id="Vector_3" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_2017">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#ffedd4] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[27px] relative shrink-0 w-[142.016px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#0a0a0a] text-[18px] top-[0.5px] tracking-[-0.4395px]">Tips for next practice</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[27px] items-center left-0 top-0 w-[342px]" data-name="Container">
      <Container10 />
      <Heading5 />
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px]">• Elbow alignment on release</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px]">• Jump height consistency</p>
    </div>
  );
}

function List1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[48px] items-start left-[32px] top-[35px] w-[310px]" data-name="List">
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function TodayScreen2() {
  return (
    <div className="absolute h-[83px] left-[20px] top-[438px] w-[342px]" data-name="TodayScreen">
      <Container9 />
      <List1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[229.78px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#155dfc] h-[36px] left-[20px] rounded-[8px] top-[561px] w-[342px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[155.71px] not-italic text-[14px] text-center text-white top-[8.5px] tracking-[-0.1504px]">View Full Analysis</p>
      <Icon3 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[16px] relative shrink-0 w-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-b-8 border-l-12 border-solid border-t-8 border-white inset-0 pointer-events-none" />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center left-[139px] pl-[4px] rounded-[16777200px] size-[64px] top-[64px]" data-name="Container">
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] h-[24px] left-[288.01px] rounded-[4px] top-[156px] w-[41.992px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[12px] text-white top-[5px]">2:34</p>
    </div>
  );
}

function TodayScreen3() {
  return (
    <div className="absolute h-[192px] left-[20px] overflow-clip rounded-[10px] top-[55px] w-[342px]" data-name="TodayScreen" style={{ backgroundImage: "linear-gradient(150.69deg, rgb(43, 127, 255) 0%, rgb(152, 16, 250) 100%)" }}>
      <Container11 />
      <Container13 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white h-[624px] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-[382px]" data-name="Card">
      <TodayScreen />
      <TodayScreen1 />
      <TodayScreen2 />
      <Button1 />
      <TodayScreen3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[68px] items-start left-[-1px] pt-[24px] px-[24px] top-[352px]" data-name="Container">
      <Heading3 />
      <Card2 />
    </div>
  );
}

function SessionsScreen() {
  return (
    <div className="absolute bg-[#f9fafb] h-[2096px] left-0 overflow-clip top-0 w-[430px]" data-name="SessionsScreen">
      <Container />
      <Container3 />
      <Button />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[54.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.5px] tracking-[-0.3125px]">6:37 ⚡</p>
      </div>
    </div>
  );
}

function Icon4() {
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

function Icon5() {
  return (
    <div className="h-[12px] relative shrink-0 w-[17px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12">
        <g clipPath="url(#clip0_1_1998)" id="Icon">
          <path d={svgPaths.p61ef190} fill="var(--fill-0, black)" fillOpacity="0.4" id="Vector" />
          <path d={svgPaths.p284e9400} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1998">
            <rect fill="white" height="12" width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon6() {
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

function Container15() {
  return (
    <div className="h-[12px] relative shrink-0 w-[58px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon4 />
        <Icon5 />
        <Icon6 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-white content-stretch flex h-[56px] items-center justify-between left-0 px-[24px] top-0 w-[430px]" data-name="Container">
      <Text />
      <Container15 />
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

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[24.938px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#6a7282] text-[12px] text-center top-px">Home</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="flex-[1_0_0] h-[44px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Icon7 />
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

function Icon8() {
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
        <Icon8 />
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

function Button3() {
  return (
    <div className="flex-[1_0_0] h-[88px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4.8px] items-center pt-[-3.2px] relative size-full">
        <Container19 />
        <Text2 />
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

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[51.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[26px] not-italic text-[#6a7282] text-[12px] text-center top-px">History</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="flex-[1_0_0] h-[44px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Icon9 />
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
          <Button2 />
          <Button3 />
          <Button4 />
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
    <div className="absolute bg-white content-stretch flex flex-col h-[89px] items-start left-[-4px] pt-px top-[1068px] w-[430px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Container17 />
    </div>
  );
}

export default function Component8ActiveUserHomeScreenNav() {
  return (
    <div className="bg-white relative size-full" data-name="8 active user home screen nav">
      <SessionsScreen />
      <Container14 />
      <Container16 />
    </div>
  );
}