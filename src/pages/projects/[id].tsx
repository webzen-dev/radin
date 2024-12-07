import { useState, useRef, useEffect, MouseEvent, TouchEvent } from "react";
import { IoLogoInstagram } from "react-icons/io";
import { PiTelegramLogoBold } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../../components/Header";
import { IoReturnUpBackSharp } from "react-icons/io5";
import Link from "next/link";
import { MdOutlineRequestQuote } from "react-icons/md";
import RequestBuy from "../../components/modal/RequestBuy";
import Image from "next/image";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";
import SocialLinks from "../../components/projects/SocialLinks";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [openModal, setOpenModal] = useState(false);
  const [largeImageSrc, setLargeImageSrc] = useState<string>("");

  const smallImageContainerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [loading, setLoading] = useState(true); // وضعیت بارگذاری را به استیت اضافه می‌کنیم
  const context = useContext(ProjectContext);

  const [project, setProject] = useState<any>(null); // استیت برای پروژه

  useEffect(() => {
    if (context) {
      const foundProject = context.projects?.find(
        (project) => project.id === Number(id)
      );
      if (foundProject) {
        setProject(foundProject); // پروژه را تنظیم می‌کنیم
        setLargeImageSrc(foundProject.images[0]?.src || "/default-image.jpg");
      }
      setLoading(false); // وقتی پروژه پیدا شد، وضعیت بارگذاری را به false تغییر می‌دهیم
    }
  }, [id, context]);

  // اگر هنوز در حال بارگذاری هستیم
  if (loading) {
    return <div>Loading...</div>;
  }

  // اگر پروژه وجود نداشته باشد
  if (!project) {
    return <div>Error: Project not found!</div>;
  }

  const handleSmallImageClick = (imgSrc: string) => {
    setLargeImageSrc(imgSrc);
  };

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (smallImageContainerRef.current?.offsetLeft || 0));
    setScrollLeft(smallImageContainerRef.current?.scrollLeft || 0);
    if (smallImageContainerRef.current)
      smallImageContainerRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (smallImageContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (smallImageContainerRef.current) {
      smallImageContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (smallImageContainerRef.current)
      smallImageContainerRef.current.style.cursor = "grab";
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (smallImageContainerRef.current)
      smallImageContainerRef.current.style.cursor = "grab";
  };

  const handleTouchStart = (e: TouchEvent) => {
    setIsDragging(true);
    const touch = e.touches[0];
    setStartX(touch.pageX - (smallImageContainerRef.current?.offsetLeft || 0));
    setScrollLeft(smallImageContainerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const x = touch.pageX - (smallImageContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (smallImageContainerRef.current) {
      smallImageContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <>
      <div className="product-detail">
        <Header />
        <div className="detail-box">
          <div className="name">{project.name}</div>
          <div className="country">Country: {project.country}</div>
          <div className="brand">Brand: {project.brand}</div>
          <div className="description">{project.description}</div>
          <div className="btns">
            <button className="request" onClick={() => setOpenModal(true)}>
              Request to Buy <MdOutlineRequestQuote />
            </button>
            <Link href={"/projects"}>
              <button className="back">
                Back <IoReturnUpBackSharp />
              </button>
            </Link>
          </div>
          <div className="update-time">Last Update: {project.updatedAt}</div>
          <SocialLinks />
        </div>
        <div className="image-box">
          <div className="larg-image">
            <Image
              width={600}
              height={0}
              draggable="false"
              src={largeImageSrc}
              alt="Large product"
            />
          </div>
          <div
            className="small-images"
            ref={smallImageContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {project.images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                draggable="false"
                alt={`Small product ${index + 1}`}
                width={150}
                height={200}
                onClick={() => handleSmallImageClick(image.src)}
              />
            ))}
          </div>
        </div>
        {openModal && (
          <RequestBuy
            projectinfo={project}
            closeModal={() => setOpenModal(false)}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
