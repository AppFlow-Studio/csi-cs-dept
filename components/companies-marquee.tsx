import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import { allIcons } from "./floating-icons"


const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string
    name: string
    username: string
    body: string
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    )
}

export function CompaniesMarquee() {
    const halfLength = Math.ceil(allIcons.length / 2);
    const firstHalf = allIcons.slice(0, halfLength);
    const secondHalf = allIcons.slice(halfLength);

    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden h-full gap-y-4">
            <Marquee pauseOnHover className="[--duration:20s]  w-full gap-x-10 h-20" >
                {/* {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))} */}
                {firstHalf.map((icon) => (
                    <icon.icon key={icon.id} className=" text-foreground h-20 w-20" />
                ))}
            </Marquee>
            <Marquee pauseOnHover reverse className="[--duration:20s]  w-full gap-x-10 h-20" >
                {/* {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))} */}
                {secondHalf.map((icon) => (
                    <icon.icon key={icon.id} className=" text-foreground h-20 w-20" />
                ))}
            </Marquee>


            <div className="from-muted pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-muted pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
    )
}
