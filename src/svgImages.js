
import React from "react";

import Icon from "@ant-design/icons";

const inboxSVG = () => (
  <svg width='24' height='24' viewBox='0 0 24 24'>
    <g fill='currentColor' fill-rule='evenodd'>
      <path
        fill-rule='nonzero'
        d='M10 14.5a2 2 0 1 0 4 0h5.5V18a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 18v-3.5H10z'
        opacity='.1'
      />
      <path
        fill-rule='nonzero'
        d='M8.062 4h7.876a2 2 0 0 1 1.94 1.515l2.062 8.246a2 2 0 0 1 .06.485V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.754a2 2 0 0 1 .06-.485L6.12 5.515A2 2 0 0 1 8.061 4zm0 1a1 1 0 0 0-.97.757L5.03 14.004a1 1 0 0 0-.03.242V18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.754a1 1 0 0 0-.03-.242L16.91 5.757a1 1 0 0 0-.97-.757H8.061zM12 17.25A2.75 2.75 0 0 1 9.295 15H7a.5.5 0 1 1 0-1h2.75a.5.5 0 0 1 .5.5 1.75 1.75 0 0 0 3.5 0 .5.5 0 0 1 .5-.5H17a.5.5 0 1 1 0 1h-2.295A2.75 2.75 0 0 1 12 17.25z'
      />
    </g>
  </svg>
);
export const InboxIcon = props => <Icon component={inboxSVG} {...props} />;

const todaySvg = () => (
  <svg width='24' height='24' viewBox='0 0 24 24'>
    <g fill='currentColor' fill-rule='evenodd'>
      <path
        fill-rule='nonzero'
        d='M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z'
        opacity='.1'
      />
      <path
        fill-rule='nonzero'
        d='M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z'
      />
      <text
        font-family="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
        font-size='9'
        transform='translate(4 2)'
        font-weight='500'
      >
        <tspan x='8' y='15' text-anchor='middle'>
          08
        </tspan>
      </text>
    </g>
  </svg>
);
export const TodayIcon = props => <Icon component={todaySvg} {...props} />;

const upcomingSvg = () => (
  <svg width='24' height='24' viewBox='0 0 24 24'>
    <g fill='currentColor' fill-rule='evenodd'>
      <path
        fill-rule='nonzero'
        d='M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z'
        opacity='.1'
      />
      <path
        fill-rule='nonzero'
        d='M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm10 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm8-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM7 8h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z'
      />
    </g>
  </svg>
);
export const UpcomingIcon = props => <Icon component={upcomingSvg} {...props} />;

import React from 'react';
import Icon from '@ant-design/icons';

const ProjectSvg = () => (
    <svg   width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10.5 17h9a.5.5 0 1 1 0 1h-9a.5.5 0 1 1 0-1zm0-6h9a.5.5 0 1 1 0 1h-9a.5.5 0 1 1 0-1zm0-6h9a.5.5 0 1 1 0 1h-9a.5.5 0 1 1 0-1zM5.75 18.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm0-6a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm0-6a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z">
        </path>
    </svg>
);
  
const LabelSvg = () => (
<svg  width="24" height="24" viewBox="0 0 24 24">
    <path  d="M3.914 11.086l6.5-6.5A2 2 0 0 1 11.828 4H18a2 2 0 0 1 2 2v6.172a2 2 0 0 1-.586 1.414l-6.5 6.5a2 2 0 0 1-2.828 0l-6.172-6.172a2 2 0 0 1 0-2.828zm.707.707a1 1 0 0 0 0 1.414l6.172 6.172a1 1 0 0 0 1.414 0l6.5-6.5a1 1 0 0 0 .293-.707V6a1 1 0 0 0-1-1h-6.172a1 1 0 0 0-.707.293l-6.5 6.5zM14.75 10.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z">
    </path>
</svg>
)

const PrioritySvg = () => (
    <svg width="24" height="24" viewBox="0 0 24 24"  fill="currentColor">
        <path  d="M5 13.777V19.5a.5.5 0 1 1-1 0V5a.5.5 0 0 1 .223-.416C5.313 3.857 6.742 3.5 8.5 3.5c1.113 0 1.92.196 3.658.776C13.796 4.82 14.53 5 15.5 5c1.575 0 2.813-.31 3.723-.916A.5.5 0 0 1 20 4.5V13a.5.5 0 0 1-.223.416c-1.09.727-2.519 1.084-4.277 1.084-1.113 0-1.92-.196-3.658-.776C10.204 13.18 9.47 13 8.5 13c-1.45 0-2.614.262-3.5.777zm0-1.123C5.965 12.216 7.133 12 8.5 12c1.113 0 1.92.196 3.658.776 1.638.545 2.371.724 3.342.724 1.45 0 2.614-.262 3.5-.777V5.346c-.965.438-2.133.654-3.5.654-1.113 0-1.92-.196-3.658-.776C10.204 4.68 9.47 4.5 8.5 4.5c-1.45 0-2.614.262-3.5.777v7.377z">
        </path>
    </svg>
    )
const ReminderSvg = () => (
    <svg  width="24" height="24" viewBox="0 0 24 24"><path d="M6.355 17.438a7.5 7.5 0 1 1 11.29 0l1.709 1.708a.5.5 0 0 1-.708.708l-1.708-1.709A7.471 7.471 0 0 1 12 20c-1.891 0-3.619-.7-4.938-1.855l-1.708 1.709a.5.5 0 0 1-.708-.708l1.709-1.708zM12 19a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zm0-7h2.5a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5V8a.5.5 0 1 1 1 0v4zm4.604-6.896a.5.5 0 0 1-.708-.708l.336-.335a2.5 2.5 0 0 1 3.536 0l.671.671a2.5 2.5 0 0 1 0 3.536l-.335.336a.5.5 0 0 1-.708-.708l.336-.335a1.5 1.5 0 0 0 0-2.122l-.671-.671a1.5 1.5 0 0 0-2.122 0l-.335.336zM4.605 7.898a.5.5 0 0 1-.707.707l-.337-.337a2.5 2.5 0 0 1 0-3.536l.671-.671a2.5 2.5 0 0 1 3.536 0l.337.337a.5.5 0 0 1-.707.707l-.337-.337a1.5 1.5 0 0 0-2.122 0l-.671.671a1.5 1.5 0 0 0 0 2.122l.337.337z">
     </path>
     </svg>
    )

 const PlusSvg = () => (
     <svg  width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
   <path d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z">
   </path>
     </svg>
     )

const EditSvg = () =>(
<svg  width="24" height="24" data-svgs-path="sm1/edit.svg" class="form_action_icon">
    <g fill="none" fill-rule="evenodd">
        <path fill="currentColor" d="M9.5 19h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1z"></path>
        <path stroke="currentColor" d="M4.42 16.03a1.5 1.5 0 0 0-.43.9l-.22 2.02a.5.5 0 0 0 .55.55l2.02-.21a1.5 1.5 0 0 0 .9-.44L18.7 7.4a1.5 1.5 0 0 0 0-2.12l-.7-.7a1.5 1.5 0 0 0-2.13 0L4.42 16.02z">
    </path>
    </g>
    </svg>
)

const ScheduleSvg = ()=>(
 <svg  width="24" height="24" viewBox="0 0 24 24" data-svgs-path="sm1/calendar.svg">
     <path fill="currentColor" fill-rule="nonzero" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm10 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM7 8h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z">
</path></svg>
)

const CommentSvg =()=>(
    <svg  width="24" height="24" viewBox="0 0 24 24" data-svgs-path="sm1/comments.svg" class="form_action_icon">  
     <path fill="currentColor" fill-rule="nonzero" d="M11.707 20.793A1 1 0 0 1 10 20.086V18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.5l-2.793 2.793zM11 20.086L14.086 17H19a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6v3.086z">
        </path></svg>
)
const MenuSvg  =()=>(
    <svg  width="15" height="3" data-svgs-path="sm1/more_small.svg">
        <path fill="currentColor" fill-rule="evenodd" d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z">
            </path>
            </svg>

)

const ProjectIcon = props => <Icon component={ProjectSvg} {...props} />;
const LabelIcon = props => <Icon component={LabelSvg} {...props} />;
const PriorityIcon = props => <Icon component={PrioritySvg} {...props} />;
const ReminderIcon = props => <Icon component={ReminderSvg} {...props} />;
const PlusIcon = props => <Icon component={PlusSvg} {...props} />;
const EditIcon = props => <Icon component={EditSvg} {...props}/>;
const ScheduleIcon = props => <Icon component={ScheduleSvg} {...props}/>;
const CommentIcon = props => <Icon component ={CommentSvg} {...props}/>;
const MenuIcon = props => <Icon component ={MenuSvg} {...props}/>;


export  {ProjectIcon,LabelIcon,PriorityIcon,ReminderIcon,PlusIcon,EditIcon,ScheduleIcon,CommentIcon,MenuIcon};
