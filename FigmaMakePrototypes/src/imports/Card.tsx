import svgPaths from "./svg-v1jrtha2zz";
import imgImageWithFallback from "figma:asset/6e4d7a34fd6d93b14b96b576edc875c09b388a16.png";

function Heading() {
  return (
    <div className="h-[19.998px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#0a0a0a] text-[14px] top-[0.57px] tracking-[-0.1504px] w-[105px] whitespace-pre-wrap">Game Footage - Tournament</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[15.999px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.52px] w-[135px] whitespace-pre-wrap">Nov 6, 2024 at 6:30 PM</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#eceef2] h-[17.043px] left-0 rounded-[8px] top-0 w-[50.469px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.522px] py-[0.522px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#030213] text-[12px]">Game</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.522px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[#eceef2] h-[17.043px] left-[54.47px] rounded-[8px] top-0 w-[86.221px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.522px] py-[0.522px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#030213] text-[12px]">Tournament</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.522px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[#eceef2] h-[17.043px] left-0 rounded-[8px] top-[21.04px] w-[104.326px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.522px] py-[0.522px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#030213] text-[12px]">Match Analysis</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.522px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[38.087px] relative shrink-0 w-full" data-name="Container">
      <Badge />
      <Badge1 />
      <Badge2 />
    </div>
  );
}

function VideoCard() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[106.081px] items-start left-0 pt-[11.999px] px-[11.999px] top-[284.07px] w-[173.381px]" data-name="VideoCard">
      <Heading />
      <Paragraph />
      <Container />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[260.068px] left-0 top-0 w-[173.381px]" data-name="ImageWithFallback">
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
    <div className="absolute bg-[rgba(0,0,0,0.2)] content-stretch flex h-[260.068px] items-center justify-center left-0 pr-[0.008px] top-0 w-[173.381px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.7)] h-[23.998px] left-[117.87px] rounded-[4px] top-[228.07px] w-[47.514px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[12px] text-white top-[4.52px]">15:42</p>
    </div>
  );
}

function VideoCard1() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[260.068px] left-0 top-0 w-[173.381px]" data-name="VideoCard">
      <ImageWithFallback />
      <Container1 />
      <Container3 />
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white border-[0.522px] border-[rgba(0,0,0,0.1)] border-solid overflow-clip relative rounded-[14px] size-full" data-name="Card">
      <VideoCard />
      <VideoCard1 />
    </div>
  );
}