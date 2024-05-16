import { useQuery } from "@tanstack/react-query";
import { string, z } from "zod";

import { getTeams } from "../utils/api";
import { Loading, SectionHeading, TeamItem } from "../utils/helper";

const teamSchema = z.object({
  id: string().optional(),
  title: string().min(5, { message: "Title must be 5 characters long." }),
  imgSrc: string(),
  designation: string().min(5, {
    message: "Designation must be 5 characters long.",
  }),
});

export type TeamProps = z.infer<typeof teamSchema>;

const OurTeam = () => {
  const {
    data: teams,
    status,
    error,
  } = useQuery({
    queryKey: ["teams"],
    queryFn: getTeams,
  });

  return (
    <section aria-labelledby="Our Team">
      <div className="container mx-auto px-12">
        <SectionHeading
          heading="The Leader Board Of Our Company"
          subHeading="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit blanditiis optio voluptate sit! Consequatur, blanditiis!"
        />

        <div className="flex items-center justify-center">
          {status === "pending" ? <Loading /> : null}
          {status === "error" ? (
            <p className="w-full bg-red-100 p-4 text-center">{error.message}</p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teams && teams.length
            ? teams?.map((team: TeamProps) => (
                <TeamItem
                  key={team.id}
                  title={team.title}
                  imgSrc={team.imgSrc}
                  designation={team.designation}
                />
              ))
            : null}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
