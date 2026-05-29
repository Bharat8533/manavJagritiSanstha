import React from "react";
import Link from "next/link";
import Button from "../UI/Button";

interface GalleryItem {
  id: number;
  image: string;
  caption: string;
  aspectClass: string; // Forces the asymmetric Pinterest height variations
}

export default function PhotoGallery() {
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image:
        "https://instagram.fagr4-2.fna.fbcdn.net/v/t51.82787-15/548160742_18398723110142950_7330375959353423729_n.webp?_nc_cat=100&ig_cache_key=MzcyMjY5NjU1MjE1OTg4NDA3MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=1QU54I1uybEQ7kNvwF48BEk&_nc_oc=AdqfoRxXpQH_UwthKoRcDpyPexBkRiT3h9_T7xIcyj_OPC1yRNsnH_6UTG26m1gchOIhHBnh_dpQhTiftrs-b2Q2&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fagr4-2.fna&_nc_gid=aoaMppFdWV16fowteM8EMw&_nc_ss=7a22e&oh=00_Af4GxpqGZqKThD9xZ2ai3I3iYxxFv5n3NlPB8mwuG24MBA&oe=6A164C8B",
      caption: "Gau Mata Seva Camp 2024",
      aspectClass: "aspect-[3/4]", // Tall portrait
    },
    {
      id: 2,
      image:
        "https://instagram.fagr4-1.fna.fbcdn.net/v/t51.82787-15/544339379_18398004787142950_299860759022312632_n.webp?_nc_cat=106&ig_cache_key=MzcxOTQzMTY1MDQ4NTk0OTg1OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=mKXYa8iUwA4Q7kNvwEPndyF&_nc_oc=AdpdlLPU3eTci_tlk_P8eNni4o_98kXqFXlSXZYeFXn3_fyV9h-J_la8VdblOwElV59s_eqdhWYjm09ZhttOc4TO&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fagr4-1.fna&_nc_gid=vvWxsT_LKVykoaJSafvTOQ&_nc_ss=7a22e&oh=00_Af72j5H2Zu1iU41Zasc9PWjPnJjUbOWh6in6zyACzQhJYg&oe=6A164F7E",
      caption: "Vrindavan Temple Darshan",
      aspectClass: "aspect-[2/3]", // Extra tall portrait
    },
    {
      id: 3,
      image:
        "https://instagram.fagr4-3.fna.fbcdn.net/v/t51.82787-15/543817332_18397059790142950_6929721432092178225_n.webp?_nc_cat=103&ig_cache_key=MzcxMzU0MTE2MTc2MTA5MTM2Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=tW1oeo5h84sQ7kNvwEtkBdx&_nc_oc=AdrLxtz_74zNqHWDw7xCXksLGcdbpUzcR4_4IBRHbNrW1XPD_8AoH1IBSf9MeAj0XcbvM0zl1skFW-qv0I6rYZWT&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fagr4-3.fna&_nc_gid=vvWxsT_LKVykoaJSafvTOQ&_nc_ss=7a22e&oh=00_Af60JCCe0drz_jmIObNRDCVeH4O1EvObZ_xSC7NtuwF2rQ&oe=6A1669A8",
      caption: "Maharaj Ji Katha",
      aspectClass: "aspect-square", // Square
    },
    {
      id: 4,
      image:
        "https://instagram.fagr4-3.fna.fbcdn.net/v/t51.82787-15/543098876_18398004712142950_2516161536629103282_n.webp?_nc_cat=103&ig_cache_key=MzcxOTQzMTY1MDQ4NTk3NjMyNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=MaUqKYkxmUkQ7kNvwEUQ_hT&_nc_oc=AdoUhkGKtwJfqqfiwgIoRxl0W00ZELGUTM8qBd9SXyGicc79O0AFXAwzFI5AJr-rYm3j9eRb0VeZUyGrvFXxw5v_&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fagr4-3.fna&_nc_gid=vvWxsT_LKVykoaJSafvTOQ&_nc_ss=7a22e&oh=00_Af4Zzf0di6nONe0WvMFz7rBCgu9ApBDQSrhOj20n1RmLcg&oe=6A165D20",
      caption: "Temple Restoration",
      aspectClass: "aspect-[3/4]", // Tall portrait
    },
    {
      id: 5,
      image:
        "https://instagram.fagr4-3.fna.fbcdn.net/v/t51.82787-15/546585426_18398370199142950_8540375082582474165_n.webp?_nc_cat=104&ig_cache_key=MzcyMDU0OTI1NDQ3MDUzMzQ5OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=kIgNCepNnDYQ7kNvwFJUe-Z&_nc_oc=AdqJaNaP6gEHe90nq6dVNrYT639QQDc3SVKBJe2EihSWWGxJL8hPWUiUpcR2MYeGt96xA05wW3ZrIkaS8IjFU5Ok&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fagr4-3.fna&_nc_gid=aoaMppFdWV16fowteM8EMw&_nc_ss=7a22e&oh=00_Af5beXxuPbCcV7n9NWQ0vGacDPi7MprO40f2D5cNvbGbPQ&oe=6A1645C2",
      caption: "Yamuna Aarti Vrindavan",
      aspectClass: "aspect-[4/5]", // Intermediate vertical height
    },
    {
      id: 6,
      image:
        "https://instagram.fagr4-2.fna.fbcdn.net/v/t51.82787-15/545268777_18398370307142950_892723422985652207_n.webp?_nc_cat=109&ig_cache_key=MzcyMDU0OTI1NDY0NjY5MjQwMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=Ziwai-YQx_YQ7kNvwFXg7yz&_nc_oc=AdpmIgBQ7ww7Q_MTUcrbn7AYJ5Qyo33bHj7GHNHH4spDUU-XdFh6uSmOkXfj_qNc8pNjT4VNfzzJrHMN-7vvgY5G&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fagr4-2.fna&_nc_gid=aoaMppFdWV16fowteM8EMw&_nc_ss=7a22e&oh=00_Af7r8V0NBymIENs4Qrb2zNfJbRSELtI9QtWAYS-VGtE-oQ&oe=6A164814",
      caption: "Devotees at Ashram",
      aspectClass: "aspect-[2/3]", // Extra tall portrait
    },
    {
      id: 7,
      image:
        "https://instagram.fagr4-3.fna.fbcdn.net/v/t51.82787-15/543817332_18397059790142950_6929721432092178225_n.webp?_nc_cat=103&ig_cache_key=MzcxMzU0MTE2MTc2MTA5MTM2Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=tW1oeo5h84sQ7kNvwEtkBdx&_nc_oc=AdrLxtz_74zNqHWDw7xCXksLGcdbpUzcR4_4IBRHbNrW1XPD_8AoH1IBSf9MeAj0XcbvM0zl1skFW-qv0I6rYZWT&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fagr4-3.fna&_nc_gid=vvWxsT_LKVykoaJSafvTOQ&_nc_ss=7a22e&oh=00_Af60JCCe0drz_jmIObNRDCVeH4O1EvObZ_xSC7NtuwF2rQ&oe=6A1669A8",
      caption: "Evening Bhajan Sandhya",
      aspectClass: "aspect-square",
    },
    {
      id: 8,
      image:
        "https://instagram.fagr4-2.fna.fbcdn.net/v/t51.82787-15/548160742_18398723110142950_7330375959353423729_n.webp?_nc_cat=100&ig_cache_key=MzcyMjY5NjU1MjE1OTg4NDA3MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=1QU54I1uybEQ7kNvwF48BEk&_nc_oc=AdqfoRxXpQH_UwthKoRcDpyPexBkRiT3h9_T7xIcyj_OPC1yRNsnH_6UTG26m1gchOIhHBnh_dpQhTiftrs-b2Q2&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fagr4-2.fna&_nc_gid=aoaMppFdWV16fowteM8EMw&_nc_ss=7a22e&oh=00_Af4GxpqGZqKThD9xZ2ai3I3iYxxFv5n3NlPB8mwuG24MBA&oe=6A164C8B",
      caption: "Seva In Action",
      aspectClass: "aspect-[3/4]",
    },
    {
      id: 9,
      image:
        "https://instagram.fagr4-3.fna.fbcdn.net/v/t51.82787-15/543098876_18398004712142950_2516161536629103282_n.webp?_nc_cat=103&ig_cache_key=MzcxOTQzMTY1MDQ4NTk3NjMyNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=MaUqKYkxmUkQ7kNvwEUQ_hT&_nc_oc=AdoUhkGKtwJfqqfiwgIoRxl0W00ZELGUTM8qBd9SXyGicc79O0AFXAwzFI5AJr-rYm3j9eRb0VeZUyGrvFXxw5v _&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fagr4-3.fna&_nc_gid=vvWxsT_LKVykoaJSafvTOQ&_nc_ss=7a22e&oh=00_Af4Zzf0di6nONe0WvMFz7rBCgu9ApBDQSrhOj20n1RmLcg&oe=6A165D20",
      caption: "Sacred Shrines",
      aspectClass: "aspect-[2/3]",
    },
    {
      id: 10,
      image:
        "https://instagram.fagr4-1.fna.fbcdn.net/v/t51.82787-15/544339379_18398004787142950_299860759022312632_n.webp?_nc_cat=106&ig_cache_key=MzcxOTQzMTY1MDQ4NTk0OTg1OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=mKXYa8iUwA4Q7kNvwEPndyF&_nc_oc=AdpdlLPU3eTci_tlk_P8eNni4o_98kXqFXlSXZYeFXn3_fyV9h-J_la8VdblOwElV59s_eqdhWYjm09ZhttOc4TO&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fagr4-1.fna&_nc_gid=vvWxsT_LKVykoaJSafvTOQ&_nc_ss=7a22e&oh=00_Af72j5H2Zu1iU41Zasc9PWjPnJjUbOWh6in6zyACzQhJYg&oe=6A164F7E",
      caption: "Parikrama Moments",
      aspectClass: "aspect-square",
    },
    {
      id: 11,
      image:
        "https://instagram.fagr4-3.fna.fbcdn.net/v/t51.82787-15/546585426_18398370199142950_8540375082582474165_n.webp?_nc_cat=104&ig_cache_key=MzcyMDU0OTI1NDQ3MDUzMzQ5OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=kIgNCepNnDYQ7kNvwFJUe-Z&_nc_oc=AdqJaNaP6gEHe90nq6dVNrYT639QQDc3SVKBJe2EihSWWGxJL8hPWUiUpcR2MYeGt96xA05wW3ZrIkaS8IjFU5Ok&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fagr4-3.fna&_nc_gid=aoaMppFdWV16fowteM8EMw&_nc_ss=7a22e&oh=00_Af5beXxuPbCcV7n9NWQ0vGacDPi7MprO40f2D5cNvbGbPQ&oe=6A1645C2",
      caption: "Holy Yamuna Waters",
      aspectClass: "aspect-[4/5]",
    },
    {
      id: 12,
      image:
        "https://instagram.fagr4-2.fna.fbcdn.net/v/t51.82787-15/545268777_18398370307142950_892723422985652207_n.webp?_nc_cat=109&ig_cache_key=MzcyMDU0OTI1NDY0NjY5MjQwMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=Ziwai-YQx_YQ7kNvwFXg7yz&_nc_oc=AdpmIgBQ7ww7Q_MTUcrbn7AYJ5Qyo33bHj7GHNHH4spDUU-XdFh6uSmOkXfj_qNc8pNjT4VNfzzJrHMN-7vvgY5G&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fagr4-2.fna&_nc_gid=aoaMppFdWV16fowteM8EMw&_nc_ss=7a22e&oh=00_Af7r8V0NBymIENs4Qrb2zNfJbRSELtI9QtWAYS-VGtE-oQ&oe=6A164814",
      caption: "Ashram Daily Prayer",
      aspectClass: "aspect-[3/4]",
    },
    {
      id: 13,
      image:
        "https://instagram.fagr4-3.fna.fbcdn.net/v/t51.82787-15/543817332_18397059790142950_6929721432092178225_n.webp?_nc_cat=103&ig_cache_key=MzcxMzU0MTE2MTc2MTA5MTM2Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=tW1oeo5h84sQ7kNvwEtkBdx&_nc_oc=AdrLxtz_74zNqHWDw7xCXksLGcdbpUzcR4_4IBRHbNrW1XPD_8AoH1IBSf9MeAj0XcbvM0zl1skFW-qv0I6rYZWT&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fagr4-3.fna&_nc_gid=vvWxsT_LKVykoaJSafvTOQ&_nc_ss=7a22e&oh=00_Af60JCCe0drz_jmIObNRDCVeH4O1EvObZ_xSC7NtuwF2rQ&oe=6A1669A8",
      caption: "Spiritual Discourse",
      aspectClass: "aspect-[2/3]",
    },
    {
      id: 14,
      image:
        "https://instagram.fagr4-1.fna.fbcdn.net/v/t51.82787-15/544339379_18398004787142950_299860759022312632_n.webp?_nc_cat=106&ig_cache_key=MzcxOTQzMTY1MDQ4NTk4OTg1OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=mKXYa8iUwA4Q7kNvwEPndyF&_nc_oc=AdpdlLPU3eTci_tlk_P8eNni4o_98kXqFXlSXZYeFXn3_fyV9h-J_la8VdblOwElV59s_eqdhWYjm09ZhttOc4TO&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fagr4-1.fna&_nc_gid=vvWxsT_LKVykoaJSafvTOQ&_nc_ss=7a22e&oh=00_Af72j5H2Zu1iU41Zasc9PWjPnJjUbOWh6in6zyACzQhJYg&oe=6A164F7E",
      caption: "Temple Architecture",
      aspectClass: "aspect-square",
    },
    {
      id: 15,
      image:
        "https://instagram.fagr4-2.fna.fbcdn.net/v/t51.82787-15/548160742_18398723110142950_7330375959353423729_n.webp?_nc_cat=100&ig_cache_key=MzcyMjY5NjU1MjE1OTg4NDA3MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=1QU54I1uybEQ7kNvwF48BEk&_nc_oc=AdqfoRxXpQH_UwthKoRcDpyPexBkRiT3h9_T7xIcyj_OPC1yRNsnH_6UTG26m1gchOIhHBnh_dpQhTiftrs-b2Q2&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fagr4-2.fna&_nc_gid=aoaMppFdWV16fowteM8EMw&_nc_ss=7a22e&oh=00_Af4GxpqGZqKThD9xZ2ai3I3iYxxFv5n3NlPB8mwuG24MBA&oe=6A164C8B",
      caption: "Gau Seva Camp",
      aspectClass: "aspect-[4/5]",
    },
  ];

  return (
    <section className="bg-[#F7F1E5] py-20 px-4 sm:px-6 lg:px-8" id="gallery">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest text-[#A63D00] uppercase mb-2 bg-[#A63D00]/10 px-3 py-1 rounded-full">
            Photo Gallery
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#2C1810] tracking-tight mt-2">
            Moments of <span className="text-[#A63D00]">Divine Grace</span>
          </h2>
          <div className="w-16 h-1 bg-[#A63D00] mx-auto mt-4 rounded-full" />
        </div>

        {/* Dynamic 5-Column Pinterest Grid within max-w-7xl */}
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4 [column-fill:balance]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white border border-[#2C1810]/5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Box configured with variable Pinterest aspect ratio mappings */}
              <div
                className={`relative w-full overflow-hidden bg-[#2C1810]/5 ${item.aspectClass}`}
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Minimalist Pinterest Card Footprint & On-hover Highlight */}
              <div className="p-3.5 bg-white transition-colors duration-300 group-hover:bg-[#7A1F0E]/5">
                <p className="text-[#2C1810] font-semibold text-xs sm:text-sm tracking-wide line-clamp-1 group-hover:text-[#A63D00] transition-colors duration-200">
                  {item.caption}
                </p>
              </div>

              {/* Subtle hover edge indicator */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-[#A63D00] transition-all duration-300 group-hover:h-full" />
            </div>
          ))}
        </div>

        {/* View All CTA Link Footer */}
        <Button title={"Explore Full Collection"} navUrl={"/gallery"} />
      </div>
    </section>
  );
}
