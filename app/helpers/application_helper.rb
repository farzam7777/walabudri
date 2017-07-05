module ApplicationHelper
	
	def isPublished_status(status) 
		if status == 1
			return "Published"
		else
			return "Pending"
		end		
	end

end
