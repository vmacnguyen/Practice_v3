import svgPaths from "./svg-m0zjislyzc";

function Heading() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[36px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[30px] tracking-[0.3955px] whitespace-pre-wrap">Welcome Vivien!</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[148px] items-start left-0 pt-[56px] px-[24px] top-0 w-[430px]" data-name="Container">
      <Heading />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p3cf0d3d0} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p14561f00} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function UploadScreen1() {
  return (
    <div className="absolute bg-[#dbeafe] content-stretch flex items-center justify-center left-[151px] rounded-[16777200px] size-[80px] top-[34px]" data-name="UploadScreen">
      <Icon />
    </div>
  );
}

function UploadScreen2() {
  return (
    <div className="absolute h-[28px] left-[34px] top-[154px] w-[314px]" data-name="UploadScreen">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-[157.66px] not-italic text-[#0a0a0a] text-[20px] text-center top-0 tracking-[-0.4492px]">Add your first practice!</p>
    </div>
  );
}

function UploadScreen3() {
  return (
    <div className="absolute h-[48px] left-[34px] top-[214px] w-[314px]" data-name="UploadScreen">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[157.08px] not-italic text-[#4a5565] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px] w-[285px] whitespace-pre-wrap">Get instant AI-powered analysis of your practice session</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[73.56px] size-[16px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p23ad1400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 2V10" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#155dfc] h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <Icon1 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[173.06px] not-italic text-[14px] text-center text-white top-[14.5px] tracking-[-0.1504px]">Choose from Library</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[101.03px] size-[16px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p39f43800} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p370da580} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon2 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[173.03px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px]">Record Now</p>
    </div>
  );
}

function UploadScreen4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[108px] items-start left-[34px] top-[310px] w-[314px]" data-name="UploadScreen">
      <Button />
      <Button1 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[452px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <UploadScreen1 />
      <UploadScreen2 />
      <UploadScreen3 />
      <UploadScreen4 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px]">Tips for best results:</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[6.141px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#155dfc] text-[12px] top-px">1</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#dbeafe] content-stretch flex items-center justify-center left-0 rounded-[16777200px] size-[20px] top-[2px]" data-name="Container">
      <Text />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[20px] left-[32px] top-0 w-[304.445px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">Position camera to capture full body movement</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Paragraph />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[7.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#155dfc] text-[12px] top-px">2</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[#dbeafe] content-stretch flex items-center justify-center left-0 rounded-[16777200px] size-[20px] top-[2px]" data-name="Container">
      <Text1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[20px] left-[32px] top-0 w-[269.828px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">Ensure good lighting for accurate analysis</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Paragraph1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[8.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#155dfc] text-[12px] top-px">3</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[#dbeafe] content-stretch flex items-center justify-center left-0 rounded-[16777200px] size-[20px] top-[2px]" data-name="Container">
      <Text2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[20px] left-[32px] top-0 w-[268.406px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">Keep camera stable throughout recording</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Paragraph2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[82px] items-start relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container6 />
      <Container8 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[114px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[598px] items-start left-[24px] top-[152.5px] w-[382px]" data-name="Container">
      <Card />
      <Container2 />
    </div>
  );
}

function UploadScreen() {
  return (
    <div className="absolute bg-[#f9fafb] h-[899px] left-0 overflow-clip top-0 w-[430px]" data-name="UploadScreen">
      <Container />
      <Container1 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[54.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.5px] tracking-[-0.3125px]">6:37 ⚡</p>
      </div>
    </div>
  );
}

function Icon3() {
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

function Icon4() {
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

function Icon5() {
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

function Container11() {
  return (
    <div className="h-[12px] relative shrink-0 w-[58px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon3 />
        <Icon4 />
        <Icon5 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-0 px-[24px] top-[22px] w-[430px]" data-name="Container">
      <Text3 />
      <Container11 />
    </div>
  );
}

export default function Component7Day0UserAfterOnboarding() {
  return (
    <div className="bg-white relative size-full" data-name="7 day 0 user after onboarding">
      <UploadScreen />
      <Container10 />
    </div>
  );
}