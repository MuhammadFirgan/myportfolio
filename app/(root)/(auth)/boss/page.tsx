import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function page() {
  return (
    <section className="bg-zinc-900">
        <div className="flex justify-center items-center h-screen text-white flex-col gap-4">
            <div className="bg-zinc-800 p-6 rounded-lg shadow-md w-96 flex flex-col gap-4">
              <div className="flex flex-col justify-center items-center gap-1 mb-9">
                <h1 className="text-2xl font-bold">Boss Page</h1>
                <span className="text-sm text-zinc-500">Authorized Access Only</span>
              </div>
              <div className="flex flex-col gap-3">
                  <Label>Enter your email</Label>
                  <Input type="email" className="bg-zinc-900 border-none"/>
              </div>
              <div className="flex flex-col gap-3">
                  <Label>Enter your password</Label>
                  <Input type="password" className="bg-zinc-900 border-none"/>
              </div>
              <Button className="bg-primary">Login to Boss</Button>
            </div>
        </div>
    </section>
  )
}
