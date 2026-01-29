import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertBooking } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useBookings() {
  return useQuery({
    queryKey: [api.bookings.list.path],
    queryFn: async () => {
      const res = await fetch(api.bookings.list.path);
      if (!res.ok) throw new Error("Failed to fetch bookings");
      return api.bookings.list.responses[200].parse(await res.json());
    },
  });
}

export function useCreateBooking() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertBooking) => {
      const res = await fetch(api.bookings.create.path, {
        method: api.bookings.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.bookings.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to create booking");
      }

      return api.bookings.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.bookings.list.path] });
      toast({
        title: "Booking Request Sent",
        description: "We have received your booking request and will contact you shortly.",
      });
    },
    onError: (error) => {
      toast({
        title: "Booking Failed",
        description: error.message || "Please check your details and try again.",
        variant: "destructive",
      });
    },
  });
}
