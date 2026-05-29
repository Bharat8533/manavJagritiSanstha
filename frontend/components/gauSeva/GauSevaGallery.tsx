import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GalleryItem } from "../UI/Types.types";

const IN_LINE_GALLERY: GalleryItem[] = [
  {
    id: 1,
    image: "https://instagram.fagr4-2.fna.fbcdn.net/v/t51.82787-15/548160742_18398723110142950_7330375959353423729_n.webp?_nc_cat=100&ig_cache_key=MzcyMjY5NjU1MjE1OTg4NDA3MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=1QU54I1uybEQ7kNvwF48BEk&_nc_oc=AdqfoRxXpQH_UwthKoRcDpyPexBkRiT3h9_T7xIcyj_OPC1yRNsnH_6UTG26m1gchOIhHBnh_dpQhTiftrs-b2Q2&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fagr4-2.fna&_nc_gid=aoaMppFdWV16fowteM8EMw&_nc_ss=7a22e&oh=00_Af4GxpqGZqKThD9xZ2ai3I3iYxxFv5n3NlPB8mwuG24MBA&oe=6A164C8B",
    caption: "Gau Mata Seva Camp 2024",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: 2,
    image: "https://instagram.fagr4-1.fna.fbcdn.net/v/t51.82787-15/544339379_18398004787142950_299860759022312632_n.webp?_nc_cat=106&ig_cache_key=MzcxOTQzMTY1MDQ4NTk4OTg1OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=mKXYa8iUwA4Q7kNvwEPndyF&_nc_oc=AdpdlLPU3eTci_tlk_P8eNni4o_98kXqFXlSXZYeFXn3_fyV9h-J_la8VdblOwElV59s_eqdhWYjm09ZhttOc4TO&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fagr4-1.fna&_nc_gid=vvWxsT_LKVykoaJSafvTOQ&_nc_ss=7a22e&oh=00_Af72j5H2Zu1iU41Zasc9PWjPnJjUbOWh6in6zyACzQhJYg&oe=6A164F7E",
    caption: "Vrindavan Temple Darshan",
    aspectClass: "aspect-[2/3]",
  },
  {
    id: 3,
    image: "https://instagram.fagr4-3.fna.fbcdn.net/v/t51.82787-15/543817332_18397059790142950_6929721432092178225_n.webp?_nc_cat=103&ig_cache_key=MzcxMzU0MTE2MTc2MTA5MTM2Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=tW1oeo5h84sQ7kNvwEtkBdx&_nc_oc=AdrLxtz_74zNqHWDw7xCXksLGcdbpUzcR4_4IBRHbNrW1XPD_8AoH1IBSf9MeAj0XcbvM0zl1skFW-qv0I6rYZWT&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fagr4-3.fna&_nc_gid=vvWxsT_LKVykoaJSafvTOQ&_nc_ss=7a22e&oh=00_Af60JCCe0drz_jmIObNRDCVeH4O1EvObZ_xSC7NtuwF2rQ&oe=6A1669A8",
    caption: "Maharaj Ji Katha",
    aspectClass: "aspect-square",
  },
  {
    id: 4,
    image: "https://instagram.fagr4-3.fna.fbcdn.net/v/t51.82787-15/543098876_18398004712142950_2516161536629103282_n.webp?_nc_cat=103&ig_cache_key=MzcxOTQzMTY1MDQ4NTk3NjMyNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=MaUqKYkxmUkQ7kNvwEUQ_hT&_nc_oc=AdoUhkGKtwJfqqfiwgIoRxl0W00ZELGUTM8qBd9SXyGicc79O0AFXAwzFI5AJr-rYm3j9eRb0VeZUyGrvFXxw5v_&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fagr4-3.fna&_nc_gid=vvWxsT_LKVykoaJSafvTOQ&_nc_ss=7a22e&oh=00_Af4Zzf0di6nONe0WvMFz7rBCgu9ApBDQSrhOj20n1RmLcg&oe=6A165D20",
    caption: "Temple Restoration Work",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: 5,
    image: "https://instagram.fagr4-3.fna.fbcdn.net/v/t51.82787-15/546585426_18398370199142950_8540375082582474165_n.webp?_nc_cat=104&ig_cache_key=MzcyMDU0OTI1NDQ3MDUzMzQ5OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=kIgNCepNnDYQ7kNvwFJUe-Z&_nc_oc=AdqJaNaP6gEHe90nq6dVNrYT639QQDc3SVKBJe2EihSWWGxJL8hPWUiUpcR2MYeGt96xA05wW3ZrIkaS8IjFU5Ok&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fagr4-3.fna&_nc_gid=aoaMppFdWV16fowteM8EMw&_nc_ss=7a22e&oh=00_Af5beXxuPbCcV7n9NWQ0vGacDPi7MprO40f2D5cNvbGbPQ&oe=6A1645C2",
    caption: "Yamuna Aarti Vrindavan",
    aspectClass: "aspect-[4/5]",
  }
];

export default function PhotoGallery(): React.JSX.Element {
  return (
    <section className="bg-[#FFFDF9] pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Typographic Header Section */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#A63D00] bg-[#A63D00]/5 border border-[#A63D00]/10 px-3 py-1.5 rounded-full">
            📸 पावन झलकियां
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810] tracking-tight">
            Moments of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A63D00] to-[#D4A017]">Divine Grace</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#A63D00] to-transparent mx-auto" />
        </div>

        {/* Dynamic Fluid Pinterest Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-5 space-y-5 [column-fill:balance]">
          {IN_LINE_GALLERY.map((item) => (
            <div
              key={item.id}
              className="group relative break-inside-avoid rounded-2xl overflow-hidden bg-[#FFFDF9] border border-[#2C1810]/5 shadow-[0_4px_20px_-10px_rgba(44,24,16,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(44,24,16,0.1)] transition-all duration-500 ease-out"
            >
              {/* Image Container with Dynamic Padding Layout Mapping */}
              <div className={`relative w-full overflow-hidden bg-[#2C1810]/5 ${item.aspectClass}`}>
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  sizes="(max-w-sm) 100vw, (max-w-md) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  unoptimized // Add this if Facebook/Instagram URLs expire or block proxy scaling
                />
                
                {/* Subtle Inline Elegant Mask Shadow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Minimal Bottom Metadata Base Panel */}
              <div className="p-4 bg-white border-t border-[#2C1810]/5 transition-colors duration-300 group-hover:bg-[#A63D00]/5">
                <p className="font-serif text-[#2C1810] font-bold text-xs sm:text-sm tracking-wide line-clamp-1 group-hover:text-[#A63D00] transition-colors duration-300">
                  {item.caption}
                </p>
              </div>

              {/* Edge Accent Stroke on Active Selection */}
              <div className="absolute left-0 bottom-0 top-0 w-[3px] bg-gradient-to-b from-[#A63D00] to-[#D4A017] h-0 transition-all duration-300 ease-out group-hover:h-full" />
            </div>
          ))}
        </div>

        {/* Premium View All CTA Interface */}
        <div className="text-center mt-16">
          <Link 
            href="/gallery" 
            className="inline-flex items-center gap-3 font-medium text-sm text-white bg-gradient-to-r from-[#A63D00] to-[#8B2612] px-8 py-3.5 rounded-full shadow-[0_10px_25px_-5px_rgba(166,61,0,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(166,61,0,0.4)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Explore Full Collection
            <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}