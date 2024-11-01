"use client"
import { Book, Calendar, ChevronDown, Home, Inbox, Plus, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
 


} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"


// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {

  const {state} = useSidebar();
  return (
    <Sidebar side="left" variant="floating" collapsible="icon">
      <SidebarHeader className="flex flex-row justify-end " >  <SidebarTrigger     /> </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>group label</SidebarGroupLabel>

          <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <SidebarGroupAction onClick={()=> {console.log("click SidebarGroupAction ")}}>
            <Plus/>

          </SidebarGroupAction>





        </DropdownMenuTrigger>

        <DropdownMenuContent side="bottom" align="end">
          <DropdownMenuItem>window1</DropdownMenuItem>
          <DropdownMenuItem>window2</DropdownMenuItem>
          <DropdownMenuItem>window3</DropdownMenuItem>
          <DropdownMenuItem>window4</DropdownMenuItem>
        </DropdownMenuContent>

          </DropdownMenu>


        
          <SidebarGroupContent>
             <SidebarMenu>
              <SidebarMenuItem>here my itme logo</SidebarMenuItem>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild onClick={()=> {console.log(`clicked from sidebar menu ${item.title}`)}} isActive>
                    
                    <a href={item.url} >
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>

                  <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <SidebarMenuAction  onClick={()=> {console.log(`clicked from sidebar menu action ${item.title}`)}}>
                    <Plus/>
                    </SidebarMenuAction >





        </DropdownMenuTrigger>

        <DropdownMenuContent side="bottom" align="end">
          <DropdownMenuItem>window item 1</DropdownMenuItem>
          <DropdownMenuItem>window item 2</DropdownMenuItem>
          <DropdownMenuItem>window item 3</DropdownMenuItem>
          <DropdownMenuItem>window item 4</DropdownMenuItem>
        </DropdownMenuContent>

          </DropdownMenu>



               
                  
                </SidebarMenuItem>
              ))}

             <SidebarMenuItem className={state === "collapsed" ? "hidden": ""}>
<SidebarMenuButton>
             <Book/>
             <span>New item</span>
</SidebarMenuButton>


             </SidebarMenuItem>
            </SidebarMenu> 







          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>here is footer</SidebarFooter>
      <SidebarRail/>
    </Sidebar>
  )
}
