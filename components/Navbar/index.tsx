import Image  from 'next/image';

function Navbar () {
  return (
    <nav className="flex justify-between mx-8 items -center">
      <Image
        src="/images/LogoKAJ.png"
        alt="Logo KAJ"
        width={78}
        height={64}
      />
      <ul className="text-2xl flex flex-row">
        <li className="mr-8">
          <a className="" href="/#lineup">
            line up
          </a>
        </li>
        <li className="">
          <a className="" href="/#faq">
            faq
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
